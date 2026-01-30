import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Generation",
				fr: "Générateur de pouvoir",
				de: "Power Generation"
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à deux cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
				de: "Search your discard pile for up 2 basic Energy cards, show them to your opponent, and put them into your hand."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scorching Smoke",
				fr: "Fumée brûlante",
				de: "Scorching Smoke"
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Chartor.",
				de: "The Defending Pokémon is now Burned. Flip a coin. If tails, dicard a  Energy card attached to Torkoal"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		tcgplayer: 89966,
		cardmarket: 275889
	}
}

export default card
