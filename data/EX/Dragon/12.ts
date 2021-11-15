import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor"
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
				fr: "Générateur de pouvoir"
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à deux cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scorching Smoke",
				fr: "Fumée brûlante"
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If tails, discard a Fire Energy card attached to Torkoal.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c'est pile, défaussez une carte Énergie  attachée à Chartor."
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
