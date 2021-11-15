import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machop",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Paranoid",
				fr: "Paranoïaque"
			},
			effect: {
				en: "As long as Machoke is Confused, Machoke's attacks do 50 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que Machopeur est Confus, ses attaques infligent au Pokémon Défenseur 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Split Kick",
				fr: "Coup en deux temps"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chacun des Pokémon Défenseurs."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing magnum"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
