import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		526,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "High Density Armor",
				fr: "Armure Résistante",
			},
			effect: {
				en: "If this Pokémon has full HP, any damage done to this Pokémon by an opponent’s attack is reduced by 50 (after applying Weakness and Resistance).",
				fr: "Si ce Pokémon a tous ses PV, tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Overdrive Smash",
				fr: "Boost Atomisant",
			},
			effect: {
				en: "During your next turn, this Pokémon’s Overdrive Smash attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Boost Atomisant de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
