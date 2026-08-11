import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Jolteon ex",
		'fr-fr': "Voltali ex",
		'de-de': "Blitza ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Evolutionary Thunder",
				'fr-fr': "Tonnerre évolutif",
				'de-de': "Evolutionary Thunder"
			},
			effect: {
				'en-us': "Once during your turn, when you play Jolteon ex from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Voltali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez placer 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				'de-de': "Einmal während deines Zuges, wenn du Blitza ex von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du auf jedes Pokémon deines Gegeners 1 Schadensmarke legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Lightning",
			],
			name: {
				'en-us': "Second Bite",
				'fr-fr': "Point douloureux",
				'de-de': "Wunde Stelle"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Fügt 20 Schadenspunkte plus 10 Schadenspunkte für jede Schadensmarke auf dem Verteidigen Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Lightning",
			],
			name: {
				'en-us': "Thunder Blast",
				'fr-fr': "Grondement de tonnerre",
				'de-de': "Donnerkeil"
			},
			effect: {
				'en-us': "Discard a Lightning Energy card attached to Jolteon ex.",
				'fr-fr': "Défaussez une carte Énergie  attachée à Voltali ex.",
				'de-de': "Lege eine an Blitza angelegte -Energiekarte auf den Ablegestapel."
			},
			damage: 70,

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
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 276872,
		tcgplayer: 86352
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jimmy-ballard"]
		},
		{
			type: "holo",
			stamp: ["jun-hasebe"]
		},
		{
			type: "holo",
			stamp: ["tom-roos"]
		},
	]
}

export default card
