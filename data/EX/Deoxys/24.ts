import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
		de: "Golking"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Triple Breach",
				fr: "Triple rupture",
				de: "Triple Breach"
			},
			effect: {
				en: "Choose 3 of your opponent's Pokémon. This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 3 des Pokémon de votre adversaire. Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et de la Résistance aux Pokémon de Banc).",
				de: "Choose 3 of your opponent's Pokémon. This attack does 10 damage to each of those Pokémon. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer",
				de: "Rend"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has any damage on it, this attack does 30 damage plus 20 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 89025,
		cardmarket: 276427
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
