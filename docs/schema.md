# Schema Information

## users
column name      | data type | details
-----------------|-----------|-----------
id               | integer   | not null, primary key
name             | string    | not null, indexed unique
email            | string    | not null, indexed unique
password_digest  | string    | not null
session_token    | string    |
profile_image    | string    |
timestamps       |           |

## projects
column name       | data type | details
-------------------|-----------|-----------
id                 | integer   | not null, primary key
type               | string    | not null
user_id            | integer   | not null, indexed
image_url           | string   |
description        | text      |
category_id           | text      |
location           | string    |
goal               | integer   |
launch             | boolean   | default false
launch_date | date|
duration | integer |
timestamps

## category
column name   | data type | details
--------------|-----------|-----------
id            | integer| not null primary key
name          | string    | not null


## rewards
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
project_id  | integer   | not null, indexed
title       | string    | not null
pledge_amount | integer | not null, default 0
description | text      | not null
estimated_delivery_month | string | not null,
estimated_delivery_year | integer | not null
number_available | integer |


## stories
column name   | data type | details
--------------|-----------|-----------
id            | integer   | not null, primary key
project_id    | integer   | not null, indexed
video_url | integer | indexed
description | text | not null
risks_and_challenges | text |


## funds
column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
project_id  | integer   | not null, indexed
user_id     | integer   | not null, indexed
amount      | integer   | not null  