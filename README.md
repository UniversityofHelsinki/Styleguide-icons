# Styleguide-icons

To compile the icon font:

```
npm install
```
```
gulp
```

To add a new icon:
 
 - Put the svg into icons/svg folder. Name it without the unicode prefix (gulp task will automatically rename the file to use the next value).
 - Increase version number in package.json
 - Run gulp
 - Push changes
 - Release the new version in github
