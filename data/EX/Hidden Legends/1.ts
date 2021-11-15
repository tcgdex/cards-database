import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Steal",
				fr: "Vol d'ombre"
			},
			effect: {
				en: "Does 10 damage plus 20 more damage for each Special Energy card in your opponent's discard pile.",
				fr: "Inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Spéciale dans la pile de défausse de votre adversaire."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Darkness Chant",
				fr: "Chant d'obscurité"
			},
			effect: {
				en: "Count the number of Basic Pokémon or Evolution cards in your discard pile. Put that many damage counters on the Defending Pokémon. You can't put more than 6 damage counters on the Defending Pokémon in this way.",
				fr: "Comptez le nombre de Pokémon de base ou de cartes Évolution dans votre pile de défausse. Placez autant de marqueurs de dégât sur le Pokémon Défenseur. Vous ne pouvez pas placer plus de 6 marqueurs de dégât sur le Pokémon Défenseur de cette façon."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
