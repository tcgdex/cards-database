import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Magical Step",
				fr: "Pas magique",
			},
			effect: {
				en: "The Defending Pokémon is now Confused. Put 6 damage counters instead of 3 on the Confused Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Confus. Placez sur le Pokémon Confus 6 marqueurs de dégât au lieu de 3.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Grumpig.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Groret.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Les perles noires amplifient ses pouvoirs psy. Sa danse étrange lui permet de contrôler ses ennemis."
	}
}

export default card
