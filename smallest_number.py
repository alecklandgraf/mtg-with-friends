from itertools import permutations

def find_min(input, lower_bound=0):
    input.sort()
    # part 1
    if (lower_bound == 0):
        # [0,1,7,8] -> ['0', '1', '7', '8'] -> '0178' -> 178
        return int(''.join(map(str, input)))

    # part 2
    # [7,1,8] -> [(1, 7, 8), (1, 8, 7), (7, 1, 8), (7, 8, 1), (8, 1, 7), (8, 7, 1)]
    perms = sorted(permutations(input))
    
    # [(0,1,7,8), ...] -> [178, ...]
    perms = [int(''.join(map(str, perm))) for perm in perms]

    for perm in perms:
        if perm >= lower_bound:
            return perm


print(find_min([7,1,8]))
print(find_min([7,1,8], 200))
print(find_min([7,1,8], 871))
print(find_min([0,0,7]))
