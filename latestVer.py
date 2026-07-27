import os
import shutil
from geopy.geocoders import Nominatim
from geopy.extra.rate_limiter import RateLimiter
import pandas as pd

def getLatestVersion():
    latestVersion = max(int(v[5:-4]) for v in os.listdir("./data"))
    return latestVersion

def getFilepath():
    latestVersion = getLatestVersion()
    latest_filename = f"datav{latestVersion}.csv"
    return os.path.join("./data", latest_filename)

def get_coordinates(df, address_column="address"    ):
    geolocator = Nominatim(user_agent="dc_partners_map_bryji_2026")
    geocode = RateLimiter(geolocator.geocode, min_delay_seconds=1)
    def lookup(address):
        if pd.isna(address) or not address:
            return pd.Series([None, None])
        location = geocode(address, timeout=10)
        if location is not None:
            return pd.Series([location.latitude, location.longitude])
        else:
            return pd.Series([None, None])
    df[["lat", "long"]] = df[address_column].apply(lookup)
    return df

if __name__ == "__main__":
    filepath = getFilepath()
    df = pd.read_csv(filepath)
    df = get_coordinates(df, address_column="address")
    df = df.replace(["NA", "N/A", "n/a", "None", ""], pd.NA)
    df["ward"] = df["ward"].astype("Int64")
    df.to_csv("latest_data.csv", index=False)