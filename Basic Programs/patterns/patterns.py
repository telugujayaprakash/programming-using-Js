def rect(r,c):
    for i in range(r):
        if(i%2==0):
            print("*",end=' ')
        for j in range(c):
            print("*",end=' ')
        print("")
rect(7,2)