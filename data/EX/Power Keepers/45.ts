import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		de: "Tanhel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Magnetic Lines",
				fr: "Lignes magnétiques",
				de: "Magnetische Linien"
			},
			effect: {
				en: "Flip a coin. If heads, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon. (Ignore this effect if your opponent has only 1 Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, déplacez une carte Énergie de base du Pokémon Défenseur sur un autre des Pokémon de votre adversaire. (Ignorez cet effet si votre adversaire ne possède qu'1 Pokémon.)",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege 1 Basis-Energiekarte, die an dem Verteidigendem Pokémon angelegt ist, an ein anderes Pokémon deines Gegners an. (Ignoriere diesen Effekt, wenn dein Gegner nur 1 Pokémon im Spiel hat.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277351,
		tcgplayer: 83787
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

