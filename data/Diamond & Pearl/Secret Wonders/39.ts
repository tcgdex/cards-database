import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Unown S",
		fr: "Zarbi S",
		de: "Icognito S"
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
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
				en: "SET",
				fr: "SÉRIE",
				de: "SET"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown S, Unown E, and Unown T on your Bench, you may flip a coin. If heads, search your discard pile for an Energy card, show it your opponent, and put it on top of your deck.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez Zarbi S, Zarbi E et Zarbi T sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la au dessus de votre deck.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito S, Icognito E und Icognito T auf deiner Bank sind, 1 Münze werfen. Bei \"Kopf\" durchsuche deinen Ablagestapel nach einer Energiekarte, zeige sie deinem Gegner und lege sie auf dein Deck."
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
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
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

