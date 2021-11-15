import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		317,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gulpin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pick and Choose",
				fr: "Choisir"
			},
			effect: {
				en: "Choose either Burned or Poisoned, and either Asleep or Confused. The Defending Pokémon is now affected by both Special Conditions.",
				fr: "Choisissez entre Brûlé et Empoisonné ou Endormi et Confus. Le Pokémon Défenseur est maintenant affecté par ces deux États Spéciaux."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reactive Poison",
				fr: "Poison réactif"
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Special Condition affecting the Defending Pokémon.",
				fr: "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur."
			},
			damage: "50+",

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
