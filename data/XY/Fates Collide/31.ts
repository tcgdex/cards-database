import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 100,
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
			cost: [
				"Psychic",
			],
			name: {
				en: "Head Walking",
				fr: "Slammeur",
			},
			effect: {
				en: "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench. Then, put 3 damage counters on that Pokémon.",
				fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc. Ensuite, placez 3 marqueurs de dégâts sur le Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Knock Back",
				fr: "Dégagement",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
