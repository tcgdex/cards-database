import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psychic Exchange",
				fr: "Échange psychique"
			},
			effect: {
				en: "Shuffle your hand into your deck. Draw up to 8 cards.",
				fr: "Mélangez votre main avec votre deck. Piochez ensuite jusqu'à 8 cartes."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate"
			},
			effect: {
				en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads",
				fr: "Lancez une pièce pour chaque Énergie attachée à Noadkoko. Cette attaque inflige 40 dégâts multipliés par le nombre de faces."
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
