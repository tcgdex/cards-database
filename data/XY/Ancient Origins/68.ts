import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Lugia EX",
		fr: "Lugia-EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aero Ball",
				fr: "Aéro Ball",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deep Hurricane",
				fr: "Ouragan Intense",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 70 more damage. Then, discard that Stadium card.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 70 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
	stage: "Basic"
}

export default card
