## What do you like about your solution

I split the results into two components, a list of said results and the result itself, as per react good practices, making the solution more readable and maintainable. I think the style is relatively simple yet elegant, and the main features were accomplished.

## What do you dislike about your solution

I couldn't complete the keyboard interaction part as the time ran out and I've never interacted with it before. The autocomplete part also could be vastly improved, with a lot less requests. There is a slight bug in which if you delete all the letters too fast, instead of deleting all the suggestions, the suggestions for the first letter remain. This works correctly if one selects and then deletes the word entirely.

## If you had a full day more to work on this, what would you improve

I would get the results from the api for the first letter, and then would filter the results from the array, according to the data being written in the input field. This would greatly benefit the app, both in time and efficiency due to performing several less GET requests, and the bug referred in the above question would disappear. I would also look into instead of limiting the autocomplete results by 6, like in my solution, create a scrollable div so we can check out more results. I would also make it a responsive solution.

## If you would start from scratch now, what would you do differently

First of all, I would try to implement the fetching solution I mentioned in the above question. Then I would look into learning how to interact with the keyboard so there would be no missing feature in this task, and then would try to finish the rest of the features, and then, if there was time left, I would focus on improving the code readability and the styling.
