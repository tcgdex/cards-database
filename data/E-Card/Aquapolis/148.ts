import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
		de: "Seedraking"
	},

	illustrator: "Mikio Menjo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Seadra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				fr: "Type de cristal",
				de: "Crystal Type"
			},
			effect: {
				en: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.",
				fr: "À chaque fois que vous attachez une carte Énergie de base ,  ou  de votre main à Hyporoi, le type de Hyporoi (sa couleur) devient identique au type de carte Énergie jusqu'à la fin du tour.",
				de: "Whenever you attach a ,  or  basic Energy from your hand to Kabutops, Kabutops's type (color) become the same as that type of Energy until the end of the turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Lightning",
			],
			name: {
				en: "Aquabomb",
				fr: "Aquabombe",
				de: "Aquabomb"
			},
			effect: {
				en: "Kingdra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)",
				fr: "Hyporoi s'inflige 10 dégâts. (N'appliquez ni la Faiblesse, ni la Résistance quand Hyporoi s'inflige des dégâts avec cette attaque.)",
				de: "Kindra does 10 damage to itself. (Don't apply Weakness or Resistance when Kindra damages itself with this attack.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dual Burn",
				fr: "Double brûlure",
				de: "Dual Burn"
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.",
				fr: "Lancez 2 pièces. Si c'est pile, défaussez-vous d'une carte Énergie attachée à Hyporoi.",
				de: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275056,
		tcgplayer: 86444
	}
}

export default card
