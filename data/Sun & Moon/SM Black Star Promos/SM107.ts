import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Dusk Mane Necrozma",
		fr: "Necrozma Crinière du Couchant",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Dusk Shot",
				fr: "Tir au Couchant",
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Pokémon-GX or Pokémon-EX. This damage isn't affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rusty Claws",
				fr: "Griffes Rouillées",
			},
			effect: {
				en: "If your opponent has exactly 1 Prize card remaining, this attack does 100 more damage.",
				fr: "S’il reste exactement 1 carte Récompense à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 100,

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
	retreat: 2,



}

export default card
