import {render, screen} from "@testing-library/react"
import Albumslider from "./album__slider"

test("if AlbumSlider render with the text ´album__text´", function() {
    render(<Albumslider/>)
    var Text = screen.getByText(/album__text/i)
    expect(Text).toBeInTheDocument();
})