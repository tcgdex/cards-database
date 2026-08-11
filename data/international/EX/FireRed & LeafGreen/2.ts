import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'de-de': "Smettbo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sooth Dust",
				'fr-fr': "Poussière apaisante",
				'de-de': "Beruhigender Staub"
			},
			effect: {
				'en-us': "As long as Butterfree is your Active Pokémon, remove 1 damage counter from each of your Pokémon between turns.",
				'fr-fr': "Tant que Papilusion est votre Pokémon Actif, retirez à chacun de vos Pokémon un marqueur de dégât entre deux tours.",
				'de-de': "Solange Smettbo dein Aktives Pokémon ist, entferne jedes Mal zwischen dn Zügen 1 Schadensmarke von jedem deiner Pokémon."
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
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec un des Pokémon de son Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Windstoß"
			},

			damage: 50,

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
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276178,
				tcgplayer: 84065
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276178,
				tcgplayer: 84065
			},
		}
	]
}

export default card
