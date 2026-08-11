import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'fr-fr': "Kabutops",
		'de-de': "Kabutops"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Shell",
				'fr-fr': "Carapace primitive",
				'de-de': "Urzeitpanzer"
			},
			effect: {
				'en-us': "As long as Kabutops is your Active Pokémon, your opponent can't play any Trainer cards from his or her hand.",
				'fr-fr': "Tant que Kabutops est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Dresseur de sa main.",
				'de-de': "Solange Kabutops dein Aktives Pokémon ist, kann dein Gegner keine Trainerkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Chop Up",
				'fr-fr': "Découper",
				'de-de': "Zerstückeln"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is thought that this Pokémon came onto land because its prey adapted to life on land.",
	},

	thirdParty: {
		cardmarket: 278055,
		tcgplayer: 86399
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
