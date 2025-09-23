param(
    [Parameter(ValueFromRemainingArguments=$true)]
    [string[]]$Arguments
)


if ($Arguments.Count -eq 0) {
    Write-Host "No arguments supplied"
    exit
}


foreach ($arg in $Arguments) {
   
    $folderName = "ex" + $arg
    
    
    if (!(Test-Path -Path $folderName)) {
        New-Item -ItemType Directory -Path $folderName -Force | Out-Null
        Write-Host "Created folder: $folderName"
    } else {
        Write-Host "Folder already exists: $folderName"
    }
}