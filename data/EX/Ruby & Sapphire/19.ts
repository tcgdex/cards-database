import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stockpile",
				fr: "Stockage"
			},
			effect: {
				en: "During your next turn, Spit Up's base damage is 70 instead of 30, and Swallow's base damage is 60 instead of 20.",
				fr: "Pendant votre prochain tour, les dégâts de base infligés par l'attaque Relâche sont de 70 au lieu de 30, et ceux de l'attaque Avale sont de 60 au lieu de 20."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spit Up",
				fr: "Relâche"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow",
				fr: "Avale"
			},
			effect: {
				en: "After your attack, remove from Pelipper the number of damage counters equal to the damage you did to the Defending Pokémon. If Pelipper has fewer damage counters than that, remove all of them.",
				fr: "Après avoir attaqué, retirez à Bekipan autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Si Bekipan a moins de marqueurs de dégât que de points infligés, retirez-lui tous ses marqueurs de dégât."
			},
			damage: 20,

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
			value: "-30"
		},
	],




}

export default card
