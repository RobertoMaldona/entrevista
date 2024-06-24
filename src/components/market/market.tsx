import React from 'react';
import { Modal, Tooltip } from '@mui/material';
import {
  Card, CardHeader, CardBody, CardFooter,
} from '../ui/card/card';
import './market.css';

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

export default function Market({ data }: any) {
  const [open, setOpen] = React.useState(false);
  const [selectedCharacter, setSelectedCharacter] = React.useState<Character | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (character: Character) => {
    setSelectedCharacter(character);
    handleOpen();
  };
  const characters: Character[] = data;
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
      >
        <div className="modal card-market">
          <div>
            <div className="modal-card-title">
              {' '}
              {selectedCharacter?.name.first}
              {' '}
              {selectedCharacter?.name.last}
            </div>
            <hr />
            <Tooltip title={getRandomElement(selectedCharacter?.sayings ?? [])}>
              <img src={selectedCharacter?.images.main} alt={selectedCharacter?.name.first} />
            </Tooltip>
          </div>
          <div className="modal-description">
            <p>
              <span className="modal-card-title">
                {' '}
                {selectedCharacter?.name.first}
                {' '}
                {selectedCharacter?.name.middle}
                {' '}
                {selectedCharacter?.name.last}
              </span>
            </p>
            <hr />
            <p>
              <span className="modal-text">Age: </span>
              {selectedCharacter?.age ?? 'Unknown'}
            </p>
            <p>
              <span className="modal-text">Gender: </span>
              {selectedCharacter?.gender ?? 'Unknown'}
            </p>
            <p>
              <span className="modal-text">Home Planet: </span>
              {selectedCharacter?.homePlanet ?? 'Unknown'}
            </p>
            <p>
              <span className="modal-text">Species: </span>
              {selectedCharacter?.species ?? 'Unknown'}
            </p>
            <p>
              <span className="modal-text">Occupation: </span>
              {selectedCharacter?.occupation ?? 'Unknown'}
            </p>
          </div>
        </div>
      </Modal>

      <div className="list">
        {characters.map((character: Character, index: number) => (
          <Card onClick={() => handleSelect(character)} className="card-market">
            <div>
              <CardHeader className="rounded">
                {character.name.first ? character.name.first : character.name.last}
              </CardHeader>

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
