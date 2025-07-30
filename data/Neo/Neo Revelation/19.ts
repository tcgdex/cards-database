import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		de: "Seedraking"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Genetic Memory",
				fr: "Mémoire génétique",
				de: "Genetic Memory"
			},
			effect: {
				en: "Use any attack from Kingdra's Basic Pokémon card or Evolution card. (Kingdra doesn't have to pay for that attack's Energy cost.)",
				fr: "Utilisez n'importe quelle attaque de la carte Pokémon de base de Hyporoi ou n'importe quelle carte Énergie qui lui est attachée. (Hyporoi n'a pas à payer le coût en Énergie de cette attaque.)",
				de: "Use any attack from Kingdra's Basic Pokémon card or Evolution card. (Kingdra doesn't have to pay for that attack's Energy cost.)"
			}

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Twister",
				fr: "Ouragan",
				de: "Twister"
			},

			effect: {
				en: "Flip 2 coins. For each heads, choose an Energy card attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing (not even damage).",
				fr: "Lancez 2 pièces. Pour chaque face, choisissez une carte Énergie attachée au Pokémon Défenseur, le cas échéant, et défaussez-la. Si vous obtenez 2 piles, cette attaque ne fait rien (pas même les dégâts).",
				de: "Flip 2 coins. For each heads, choose 1 Energy card attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing (not even damage)."
			},

			damage: 50
		},
	],

	description: {
		fr: "Il sommeille au fond de l'océan pour s'alimenter en énergie. On raconte qu'il provoque des tornades quand il se réveille."
	},

	thirdParty: {
		cardmarket: 274605,
		tcgplayer: 86442
	}
}

export default card
