import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Lucario GL",
		fr: "Lucario  Niv. 32",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Boundary Aura",
				fr: "Barrage aura",
			},
			effect: {
				en: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×2 instead.",
				fr: "Multipliez la Faiblesse par 2 pour chaque Pokémon (les vôtres et ceux de votre adversaire).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combo Throw",
				fr: "Combo de lancers",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
