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

	dexId: [230],

	hp: 110,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
		de: "Seemon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				fr: "Type de cristal",
				de: "Kristall-Typ"
			},
			effect: {
				en: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.",
				fr: "À chaque fois que vous attachez une carte Énergie de base {W}, {L}, ou {P} de votre main à Hyporoi, le type de Hyporoi (sa couleur) devient identique au type de carte Énergie jusqu'à la fin du tour.",
				de: "Immer wenn du eine {W}-, {L}- oder {P}-Basis-Energiekarte aus deiner Hand an Seedraking anlegst, wird Seedrakings Typ (Farbe) bis zum Ende des Zuges zu demselben Typ wie diese Energiekarte."
			}
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
				de: "Wasserbombe"
			},
			effect: {
				en: "Kindra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)",
				fr: "Hyporoi s'inflige 10 dégâts. (N'appliquez ni la Faiblesse, ni la Résistance quand Hyporoi s'inflige des dégâts avec cette attaque.)",
				de: "Seedraking fügt sich selber 10 Schadenspunkte zu. (Wende Schwäche und Resistenz nicht an, wenn Seedraking sich selber mit diesem Angriff Schadenspunkte zufügt.)"
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
				de: "Doppeltes Brennen"
			},
			effect: {
				en: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.",
				fr: "Lancez 2 pièces. Si c'est pile, défaussez-vous d'une carte Énergie attachée à Hyporoi.",
				de: "Wirf 2 Münzen. Lege für jedesmal „Zahl“ eine an Seedraking angelegte Energiekarte auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86444,
				cardmarket: 275091
			}
		},
	]
}

export default card
