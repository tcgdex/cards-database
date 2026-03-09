import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ampharos δ",
		fr: "Pharamp δ",
		de: "Ampharos"
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
		fr: "Lainergie"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Holon Veil",
				fr: "Voile Holon",
				de: "Holon-Schleier"
			},
			effect: {
				en: "Treat each Basic Pokémon and Evolution card in your deck, in your discard pile, in your hand, and in play as a Pokémon that has δ on its card.",
				fr: "Traitez chaque Pokémon de base et chaque carte Évolution dans votre deck, votre pile de défausse, votre main ou en jeu comme un Pokémon possédant le symbole δ.",
				de: "Behandle alle deine Basis-Pokémon und Evolutionskarten in deinem Deck, deinem Ablagestapel, deiner Hand und im Spiel, als wären es Pokémon, auf denen δ zu sehen ist."
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
				fr: "Cercle Delta",
				de: "Delta-Zirkel"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon que vous avez en jeu possédant le symbole δ.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon, das du im Spiel hast, auf dem δ zu sehen ist, zu."
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


	retreat: 2,

	thirdParty: {
		cardmarket: 277206
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["tom-roos"]
		}
	]
}

export default card
