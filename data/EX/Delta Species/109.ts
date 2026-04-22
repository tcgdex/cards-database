import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Jolteon ex",
		fr: "Voltali ex",
		de: "Blitza ex"
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
		en: "Eevee",
		fr: "Evoli"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Thunder",
				fr: "Tonnerre évolutif",
				de: "Evolutionary Thunder"
			},
			effect: {
				en: "Once during your turn, when you play Jolteon ex from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Voltali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez placer 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				de: "Einmal während deines Zuges, wenn du Blitza ex von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du auf jedes Pokémon deines Gegeners 1 Schadensmarke legen."
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
				en: "Second Bite",
				fr: "Point douloureux",
				de: "Wunde Stelle"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				de: "Fügt 20 Schadenspunkte plus 10 Schadenspunkte für jede Schadensmarke auf dem Verteidigen Pokémon zu."
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
				en: "Thunder Blast",
				fr: "Grondement de tonnerre",
				de: "Donnerkeil"
			},
			effect: {
				en: "Discard a Lightning Energy card attached to Jolteon ex.",
				fr: "Défaussez une carte Énergie  attachée à Voltali ex.",
				de: "Lege eine an Blitza angelegte -Energiekarte auf den Ablegestapel."
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
