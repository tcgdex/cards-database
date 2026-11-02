import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Stakataka-GX",
		fr: "Ama-Ama-GX",
		de: "Muramura-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		805,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Wall",
				fr: "Ultra-Mur",
				de: "Ultrawand"
			},
			effect: {
				en: "Your Ultra Beasts take 10 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				fr: "Vos Ultra-Chimères subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				de: "Deinen Ultrabestien werden durch Attacken deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Gigaton Stomp",
				fr: "Écrasement Gigatonne",
				de: "Gigatonnen-Stampfer"
			},

			damage: 120,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Assembly-GX",
				fr: "Empilage-GX",
				de: "Mauerwerk-GX"
			},
			effect: {
				en: "This attack does 50 more damage for each Prize card you have taken. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der von dir genommenen Preiskarten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
