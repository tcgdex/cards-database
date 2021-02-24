import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		fr: "Suicune",
	},
	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Aqua Recovery",
				fr: "Guérison aquatique",
			},
			effect: {
				en: "Once during your turn, when you put Suicune from your hand onto your Bench, you may search your discard pile for up to 3 Water Pokémon, show them to your opponent, and put them into your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Suicune de votre main sur votre Banc, vous pouvez choisir dans votre pile de défausse jusqu'à 3 Pokémon Water. Montrez-les à votre adversaire et placez-les dans votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Cure Stream",
				fr: "Ruisseau guérisseur",
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés au Pokémon Défenseur par des attaques sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
