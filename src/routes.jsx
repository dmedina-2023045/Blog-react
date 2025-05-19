import { element } from "prop-types";
import { HomePage } from "./Pages/MainPage";
import { DashboardPages } from "./Pages/DashBoardPage";
import { Publications } from "./components/Publication/Publications";
import { CommentsPage } from "./Pages/CommentPage";

export const route = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/dashboard',
        element: <DashboardPages/>,
        children: [
            {
                path: 'publications',
                element: <Publications/>,
            },
            {
                path: 'publications/comments/:id',
                element: <CommentsPage/>
            }
        ]
    }
]