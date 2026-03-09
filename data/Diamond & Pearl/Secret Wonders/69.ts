import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown N",
		fr: "Zarbi N",
		de: "Icognito N"
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "NOD",
				fr: "Non-oui",
				de: "NOD"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown N, Unown O, and Unown D on your Bench, you may ask your opponent to take a Prize card. If he or she does, you take a Prize card. If he or she doesn't, draw a card.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi N, Zarbi O et Zarbi D sont sur votre Banc, vous pouvez demander à votre adversaire de récolter une carte Récompense. Vous récoltez alors une carte Récompense. S'il ou elle choisit de ne pas en récolter, vous piochez une carte.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito N, Icognito O und Icognito D auf deiner Bank sind, deinen Gegner fragen, ob er 1 seiner Preise auf die Hand nehmen möchte. Wenn er das macht, nimm 1 deiner Preise auf die Hand; andernfalls ziehe 1 Karte."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
