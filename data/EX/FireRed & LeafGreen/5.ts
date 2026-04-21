import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei"
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
		fr: "Noeufnoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psychic Exchange",
				fr: "Échange psychique",
				de: "Psychic Exchange"
			},
			effect: {
				en: "Shuffle your hand into your deck. Draw up to 8 cards.",
				fr: "Mélangez votre main avec votre deck. Piochez ensuite jusqu'à 8 cartes.",
				de: "Shuffle your hand into your deck. Draw up to 8 cards."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate",
				de: "Big Eggsplosion"
			},
			effect: {
				en: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads",
				fr: "Lancez une pièce pour chaque Énergie attachée à Noadkoko. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276181,
		tcgplayer: 85359
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
