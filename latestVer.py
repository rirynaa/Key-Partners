import os
import shutil

def getLatestVersion():
    latestVersion = max(int(v[5:-4]) for v in os.listdir("./data"))
    return latestVersion

latestVersion = getLatestVersion()
latest_filename = f"datav{latestVersion}.csv"

def copyAndRenameFile():
    source_path = os.path.join("./data", latest_filename)
    destination_path = os.path.join("./data", "latest_data.csv")
    shutil.copyfile(source_path, destination_path)
    print(f"Copied {latest_filename} → {destination_path}")

copyAndRenameFile()