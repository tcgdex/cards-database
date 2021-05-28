import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Greninja & Zoroark-GX",
		fr: "Amphinobi et Zoroark-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 250,
	types: [
		"Darkness",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Pulse",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Darkness Energy attached to all of your Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Union-GX",
				fr: "Vibrobscur",
			},
			effect: {
				en: "Put 2 in any combination of Darkness Pokémon-GX and Darkness Pokémon-EX from your discard pile onto your Bench. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), attach 2 Energy cards from your discard pile to each Pokémon that you put onto your Bench in this way. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Darkness attachées à tous vos Pokémon.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Union Ténébreuse-GX",
			},
			effect: {
				fr: "Ajoutez de votre pile de défausse à votre Banc une combinaison de 2 cartes choisies parmi des Pokémon-GX Darkness et des Pokémon-EX Darkness. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), attachez 2 cartes Énergie de votre pile de défausse à chacun des Pokémon que vous avez placés sur votre Banc de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
	retreat: 2,



}

export default card
