import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Grotle",
		fr: "Boskara",
		de: "Chelcarain"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		388,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Planting",
				fr: "Plantations",
				de: "Anpflanzen"
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie Grass de votre main à 1 de vos Pokémon.",
				de: "Lege 1 -Energiekarte von deiner Hand an 1 deiner Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278086,
		tcgplayer: 85917
	}
}

export default card
