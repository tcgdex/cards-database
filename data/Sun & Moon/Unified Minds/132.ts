import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Weavile-GX",
		fr: "Dimoret-GX",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 200,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Connection",
				fr: "Connexion Ténébreuse",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Darkness Energy from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nocturnal Maneuvers-GX",
				fr: "Manœuvres Nocturnes-GX",
			},
			effect: {
				en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez autant de Pokémon de base que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
