import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Stakataka-GX",
		fr: "Ama-Ama-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
			},
			effect: {
				en: "Your Ultra Beasts take 10 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				fr: "Vos Ultra-Chimères subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
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
			},
			effect: {
				en: "This attack does 50 more damage for each Prize card you have taken. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
