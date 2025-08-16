import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Swampert EX",
		fr: "Laggron EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Flood",
				fr: "Invasion Boueuse",
			},
			effect: {
				en: "Reveal the top 4 cards of your deck. This attack does 40 more damage for each Water Energy you find there. Shuffle the revealed cards back into your deck.",
				fr: "Montrez les 4 cartes du dessus de votre deck. Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Water que vous y trouvez. Mélangez les cartes montrées avec votre deck.",
			},
			damage: "40＋",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Tackle",
				fr: "Hydro-Charge",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289718
	}
}

export default card
