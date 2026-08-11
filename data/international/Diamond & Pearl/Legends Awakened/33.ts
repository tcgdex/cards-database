import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'de-de': "Schlapor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Haspiror",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Healing Tail",
				'fr-fr': "Queue guérisseuse",
				'de-de': "Heilpuschel"
			},
			effect: {
				'en-us': "As long as Lopunny is your Active Pokémon, remove 1 damage counter from each of your Benched Pokémon between turns.",
				'fr-fr': "Tant que Lockpin est votre Pokémon Actif, retirez à chacun de vos Pokémon de Banc 1 marqueur de dégât entre deux tours.",
				'de-de': "Solange Schlapor dein Aktives Pokémon ist, entferne zwischen den Zügen 1 Schadensmarke von jedem Pokémon auf deiner Bank."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross-Cut",
				'fr-fr': "Coupe transversale",
				'de-de': "Überkreuzzerschneider"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "An extremely cautious Pokémon. It cloaks its body with its fluffy ear fur when it senses danger.",
		'fr-fr': "Un Pokémon extrêmement prudent. Il couvre son corps de ses oreilles pelucheuses en cas de danger."
	},

	thirdParty: {
		cardmarket: 278182,
		tcgplayer: 86824
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
