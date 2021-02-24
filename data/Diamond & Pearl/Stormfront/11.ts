import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		389,
	],
	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sunshine Song",
				fr: "Chanson solaire",
			},
			effect: {
				en: "Once during your turn (before your attack), when you play Torterra from your hand to evolve 1 of your Pokémon, you may choose as many of your Grass Pokémon in play as you like. For each Grass Pokémon you choose, search your deck for an Evolution card that evolves from that Pokémon and evolve it. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Torterra de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir autant de Pokémon Grass que vous avez en jeu que vous le voulez. Pour chaque Pokémon Grass que vous choisissez, cherchez dans votre deck une carte Évolution qui évolue de ce Pokémon et faites-le évoluer. Ensuite, mélangez votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crash Impact",
				fr: "Cratère",
			},
			effect: {
				en: "Torterra does 20 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Torterra s'inflige 20 dégâts. Votre adversaire échange le Pokémon  Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Shake",
				fr: "Terre tremblante",
			},
			effect: {
				en: "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, lorsque celui-ci place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
