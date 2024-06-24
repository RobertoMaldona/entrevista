import React from 'react';
import {
  Card, CardHeader, CardBody, CardFooter,
} from '../ui/card/card';
import './market.css';
import { Modal, Tooltip } from '@mui/material';

interface Character {
    name: {
      first: string;
      middle: string;
      last: string;
    };
    images: {
      main: string;
    };
    age: string;
    gender: string;
    homePlanet: string;
    species: string;
    occupation: string;
    sayings: string[];
  }

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Market(data: any) {
  const [open, setOpen] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState<Character | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (character: Character) => {
    setSelectedCharacter(character);
    handleOpen();
  };
  const characters: Character[] = data.data;
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
      >
        <div className="modal">
          <Tooltip title={getRandomElement(selectedCharacter?.sayings ?? [])}>
            <img src={selectedCharacter?.images.main} alt={selectedCharacter?.name.first} />
          </Tooltip>
          <Card>
            <CardHeader>
              {selectedCharacter?.name.first}
              {' '}
              {selectedCharacter?.name.last}
            </CardHeader>
            <CardBody className="">
              <p>
                Age:
                {selectedCharacter?.age}
              </p>
              <p>
                Gender:
                {selectedCharacter?.gender}
              </p>
              <p>
                Home Planet:
                {selectedCharacter?.homePlanet}
              </p>
              <p>
                Species:
                {selectedCharacter?.species}
              </p>
              <p>
                Occupation:
                {selectedCharacter?.occupation}
              </p>
            </CardBody>
          </Card>
        </div>
      </Modal>

      <div className="list">
        {characters.map((character: Character, index: number) => (
          <Card key={index} onClick={() => handleSelect(character)}>
            <div>
              <CardHeader className="rounded">{character.name.first}</CardHeader>

              <CardBody>
                <img src={character.images.main} alt={character.name.first} />
              </CardBody>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
