import React, { useState } from 'react';
import {
  Input,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import type { FilterValue } from '@app/pages/index';

interface FilterProps {
  onRadioClick: (value: FilterValue) => void;
  onSearch: (value: string) => void;
}

const Filters = ({ onRadioClick, onSearch }: FilterProps) => {
  const [value, setValue] = useState<FilterValue>();
  const [query, setQuery] = useState<string>('');

  const onHandleChange = (value: FilterValue) => {
    setValue(value);
    onRadioClick(value);
    setQuery('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setQuery(value);
    onSearch(value);
  };
  return (
    <Grid templateColumns="repeat(3, 3fr)" alignItems="center" gap={4}>
      <GridItem colSpan={2}>
        <Input
          placeholder="Basic usage"
          mb={2}
          shadow="md"
          onChange={onChange}
          value={query}
        />
      </GridItem>

      <GridItem>
        <RadioGroup onChange={onHandleChange} value={value}>
          <Stack direction="row">
            <Radio value="1">Now Playing</Radio>
            <Radio value="2">Popular</Radio>
            <Radio value="3">Top Rated</Radio>
          </Stack>
        </RadioGroup>
      </GridItem>
    </Grid>
  );
};

export default Filters;
