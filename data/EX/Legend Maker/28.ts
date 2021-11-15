import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution"
			},
			effect: {
				en: "As long as Wobbuffet is an Evolved Pokémon, your opponent pays Colorless more to retreat his or her Active Pokémon.",
				fr: "Tant que Qulbutoké est un Pokémon Évolué, votre adversaire paye un  supplémentaire pour faire battre en retraite son Pokémon Actif."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Wobbuffet.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Qulbutoké."
			},
			damage: "10×",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Tag",
				fr: "Marque d'ombre"
			},
			effect: {
				en: "Put 7 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				fr: "Placez 7 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire."
			},

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
