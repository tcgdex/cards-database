import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Xerneas",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		717,
	],
	hp: 130,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Oblivion Wing",
				fr: "Géo-Contrôle",
			},
			effect: {
				en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez une carte Énergie Fairy dans votre deck et attachez-la au Pokémon choisi. Mélangez ensuite votre deck.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Blade",
				fr: "Javelot Arc-En-Ciel",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
