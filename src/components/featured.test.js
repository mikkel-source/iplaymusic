import mockedAxios from "axios;"
import { act, cleanup, render, screen, waitFor } from "@testing-library/react"
import Featured from "./featured"
import TokenContext from "../pages/tokenContext"

afterEach(cleanup)
jest.mock("axios")


descripe("Featuredpage", function () {
    var response = {
        data: {
            playlist: {
                items: [
                    {
                        id: "1",
                        images: {
                            url:
                        }
                    }
                ]
            }

        }
    }
})