# print("Python")

# str = "abcd"
# n = len(str)
# # print(n*(n+1)//2)
# for i in range(n):
#     for j in range(i,n):
#         print(str[i:j+1])

# # 2nd

# s1 = "helloworld"
# s2 = "world"
# flag = "False"
# if len(s2) > len(s1):
#     flag = "False"
# n = len(s1)
# i=0
# n2 = len(s2)
# for i in range(n-n2+1):
#     subStr = s1[i:i+n2]
#     if subStr == s2:
#         flag = "True"
# print(flag)

# # 3rd problem 

# s = "abababab"
# sub = "ab"
# flag3 = "true"
# count = 0
# if len(sub) > len(s):
#     print("Not possible") 
# for i in range(len(s)-len(sub)+1):
#     subStr3 = s[i:i+len(sub)]
#     if subStr3 == sub:
#         count +=1
# print(count)


# # 5th problem 

# s4 = "daabcbaabcbc"
# part = "abc"
# while part in s4:
#     s4=s4.replace(part,"")
# print(s4)


# # 6th problem

# arr = [12,4,5,5,7,9]
# resL = 0
# for i in range(len(arr)):
#     for j in range(i+1,len(arr)):
#         profit = arr[j] - arr[i]
#         if profit > resL:
#             resL = profit
# print(resL) 

# # 6th [problem]
# s = "racecar"
# i = 1
# j = 5
# sub = s[i:j+1]
# if (sub == sub[::-1]):
#     print("Pallindrom")
# else:
#     print("Not")

# # 7th question

# pallindrom = "abba"
# n=len(pallindrom)
# res=[]
# for i in range(n):
#     for j in range(i,n):
#         sub = pallindrom[i:j+1]
#         if sub == sub[::-1]:
#             res.append(sub)  
# print(res)

# # 8th problem 

# pallindrom = "abba"
# n=len(pallindrom)
# res=[]
# for i in range(n):
    # res=0
    # sub = ""
    # for j in range(i,n):
        # new_sub = pallindrom[i:j+1]
        # if new_sub == new_sub[::-1]:
            # if len(sub) > res:
# print(res)
