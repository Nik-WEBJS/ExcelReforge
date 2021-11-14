import { ExcelComponent } from "@core/ExcelComponent";

export class Table extends ExcelComponent{
    static className = 'excel__table'

    toHTML(){
        return `    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">
            <div class="colomn">A</div>
            <div class="colomn">B</div>
            <div class="colomn">C</div>
        </div>
    </div>

    <div class="row">
        <div class="row-info">
            1
        </div>
        <div class="row-data">
            <div class="cell selected">A1</div>
            <div class="cell">B1</div>
            <div class="cell">C1</div>
        </div>
    </div>

    <div class="row">
        <div class="row-info">
            2
        </div>
        <div class="row-data">
            <div class="cell contenteditable">A1</div>
            <div class="cell contenteditable">B1</div>
            <div class="cell contenteditable">C1</div>
        </div>
    </div>`
    }
}