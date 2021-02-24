import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wind Charm",
				fr: "Amulette Éolienne",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon. (Existing effects are not removed.)",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon. (Les effets déjà en action ne sont pas retirés.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
