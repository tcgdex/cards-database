import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Nœufnœuf"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine"
			},
			effect: {
				en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute.",
				fr: "À moins que tous les dégâts infligés par cette attaque ne soient prévenus, vous pouvez retirer 1 marqueur de dégâts de Nœufnœuf."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Souvent pris pour des œufs, ils attaquent en groupe comme un essaim."
	}
}

export default card
