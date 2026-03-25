import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Wobbuffet",
		fr: "Qulbutoké de la Team Rocket"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Saboteri",
	dexId: [202],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Rocket Mirror",
				fr: "Miroir Rocket",
			},
			effect: {
				en: "Move all damage counters from 1 of your Benched Team Rocket's Pokémon to your opponent's Active Pokémon.",
				fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de la Team Rocket de Banc vers le Pokémon Actif de votre adversaire.",
			},
		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
			},
			damage: 70,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			subtype: "cosmos"
		},
		{
			type: "holo",
			stamp: ["pokemon-center"]
		}
	]
}

export default card
