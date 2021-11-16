import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ampharos δ",
		fr: "Pharamp δ ESPÈCES DELTA"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Flaaffy",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Holon Veil",
				fr: "Voile Holon"
			},
			effect: {
				en: "Treat each Basic Pokémon and Evolution card in your deck, in your discard pile, in your hand, and in play as a Pokémon that has δ on its card.",
				fr: "Traitez chaque Pokémon de base et chaque carte Évolution dans votre deck, votre pile de défausse, votre main ou en jeu comme un Pokémon possédant le symbole δ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Circle",
				fr: "Cercle Delta"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon que vous avez en jeu possédant le symbole δ."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
