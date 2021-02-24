import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		714,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Sound",
				fr: "Son Destructeur",
			},
			effect: {
				en: "Your opponent reveals their hand. Discard all Item cards you find there.",
				fr: "Votre adversaire dévoile sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
