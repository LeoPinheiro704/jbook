import './cell-list-item.css';
import { Cell } from '../state';
import ActionBar from './action-bar';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = (
      <>
        <div className='action-bar-wrapper'>
          <ActionBar id={cell.id}></ActionBar>
        </div>
        <CodeCell cell={cell}></CodeCell>
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell}></TextEditor>
        <ActionBar id={cell.id}></ActionBar>
      </>
    );
  }

  return <div className='cell-list-item'>{child}</div>;
};

export default CellListItem;
