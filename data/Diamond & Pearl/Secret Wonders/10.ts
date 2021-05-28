import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Phoenix Turn",
			},
			effect: {
				en: "Once during your opponent's turn, if Ho-Oh would be Knocked Out by damage from an attack, you may flip a coin. If heads, Ho-Oh isn't discarded. Instead, remove all damage counters, Special Conditions, and other effects from Ho-Oh. Then, discard all cards attached to Ho-Oh (except for Energy cards). This counts as Ho-Oh being Knocked Out and your opponent takes a Prize card.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Wing",
				fr: "Coup du phoenix",
			},
			effect: {
				en: "This attack does 20 damage times the number of different types of basic Energy cards attached to Ho-Oh.",
				fr: "Une seule fois lors du tour de votre adversaire, si Ho-Oh est mis K.O par les dégâts d'une attaque, vous pouvez lancer une pièce. Si c'est pile, Ho-Oh n'est pas défaussé. Retirez-lui à la place tous ses marqueurs de dégât, États Spéciaux et autres effets. Ensuite, défaussez toutes les cartes attachées à Ho-Oh (cartes Énergie exceptées). Ho-Oh est alors mis K.O et votre adversaire récolte une carte Récompense.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Aile arc-en-ciel",
			},
			effect: {
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de types différents de cartes Énergie de base attachées à Ho-Oh.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
