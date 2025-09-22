if ($args.Count -eq 0) {
    Write-Host "No arguments supplied"
} else {
    $args[0..2] | ForEach-Object { Write-Host $_ }
}
