import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  
} from "@material-ui/core";
import {Edit} from "@material-ui/icons";
import {Delete} from "@material-ui/icons";
import {ArrowDownward} from "@material-ui/icons";
import {ArrowUpward} from "@material-ui/icons";
import {TextField} from "@material-ui/core";

import InlineForm from "./InlineForm";

const row = (
  x,
  i,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return currentlyEditing ? (
    <TableRow key={`inline-form-${i}`} selectable={false}>
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
        stopEditing={stopEditing}
      />
    </TableRow>
  ) : (
    <TableRow key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <TableCell key={`trc-${k}`}>{x[y.prop]}</TableCell>
      ))}
      <TableCell>
        <Edit onClick={() => startEditing(i)} />
        <Delete onClick={() => handleRemove(i)} />
      </TableCell>
    </TableRow>
  );
};

export default ({
  data,
  header,
  handleRemove,
  startEditing,
  editIdx,
  handleSave,
  stopEditing,
  handleSort,
  sortDirection,
  columnToSort
}) => (
  <Table>
    <TableHead>
      <TableRow>
        {header.map((x, i) => (
          <TableCell key={`thc-${i}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => handleSort(x.prop)}
            >
              <span>{x.name}</span>
              {columnToSort === x.prop ? (
                sortDirection === "asc" ? (
                  <ArrowUpward />
                ) : (
                  <ArrowDownward />
                )
              ) : null}
            </div>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((x, i) =>
        row(
          x,
          i,
          header,
          handleRemove,
          startEditing,
          editIdx,
          handleSave,
          stopEditing
        )
      )}
    </TableBody>
  </Table>
);
