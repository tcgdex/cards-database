import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Elekable",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Elektek",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Motor Drive",
				fr: "Motorisé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Lightning Energy card and attach it to Electivire. This power can't be used if Electivire is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse une carte Énergie Lightning et l'attacher à Elekable. Ce pouvoir ne peut pas être utilisé si Elekable est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Discharge",
				fr: "Coup d'Jus",
			},
			effect: {
				en: "Discard all Lightning Energy attached to Electivire. Flip a coin for each Lightning Energy you discarded. This attack does 50 damage times the number of heads.",
				fr: "Défaussez toutes les Énergies Lightning attachées à Elekable. Lancez une pièce pour chaque carte Énergie Lightning défaussée. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
