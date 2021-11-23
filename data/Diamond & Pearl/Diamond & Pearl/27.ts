import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Life Drain",
				fr: "Perte d'énergie",
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne soit plus qu'à 10 PV d'être mis K.O.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Dance",
				fr: "Danse d'ombre",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like. Then, switch Gengar with 1 of your Benched Pokémon.",
				fr: "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. Ensuite, échangez Ectoplasma avec 1 de vos Pokémon de Banc.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "On dit que lorsqu'Ectoplasma se cache dans l'ombre, la température alentour chute de 5°C."
	}
}

export default card
