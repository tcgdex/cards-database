import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Card-Flip Game",
		fr: "Jeu de chance",
		de: "Ratespiel"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 des récompenses de votre adversaire qui est face cachée. Devinez si c'est une carte Énergie, une carte Dresseur ou une carte Pokémon (de base ou Évolution). Retournez la carte (et laissez-la découverte). Si vous avez deviné juste, piochez 2 cartes.",
		de: "Choose 1 of your opponent's face-down Prizes. Guess wheter it is an Energy card, a Trainer card, or a Pokémon (Basic or Evolution) card. Flip the card face up (and leave it face up). If you guessed right, draw 2 cards."
	},

	thirdParty: {
		cardmarket: 274492,
		tcgplayer: 84098
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
