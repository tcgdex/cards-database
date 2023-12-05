import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
		de: "Zirpeise"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		402,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kricketot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sore Performance",
				fr: "Spectacle douloureux",
				de: "Lahmer Auftritt"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Concerto",
				fr: "Concerto",
				de: "Konzert"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Kricketot and each Kricketune you have in play.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Crikzik et chaque Mélokrik que vous avez en jeu.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Zirpeise und Zirpurze, das du im Spiel hast, zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		fr: "Il croise ses bras affûtés devant son torse pour crier. Il compose tout un tas de mélodies."
	}
}

export default card
