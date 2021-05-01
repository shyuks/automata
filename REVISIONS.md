Potential Changes / Refactoring

1. I wanted to reduce the time complexity (O(n^3)), but couldn't find a suitable solution in the alloted time frame. Maybe save each neighbor coordinates for each cell tuple [x,y] in a map or object? Somehow reduce the number of nested for loops.

2. I think there could be a better solution for my getNeighborInfo() function. Technically, getNeighborInfo() and getNeighborCountSplit() could be combined into just one function. Initially split out for easier readability.