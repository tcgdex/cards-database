import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Expansion",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charmed Slap",
				fr: "Gifle Décorée",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card that has \"Fairy Charm\" in its name attached to it, this attack does 70 more damage.",
				fr: "Si une carte Outil Pokémon avec « Amulette Féerique » dans son nom est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
