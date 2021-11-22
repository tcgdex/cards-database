import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		293,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				es: "Canon",
				it: "Coro",
				pt: "Circular",
				de: "Kanon"
			},
			effect: {
				en: "This attack does 10 damage times the number of your Pokémon that have the Round attack.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				es: "Este ataque hace 10 puntos de daño por cada uno de tus Pokémon que tenga el ataque Canon.",
				it: "Questo attacco infligge 10 danni per ogni tuo Pokémon che conosce l'attacco Coro.",
				pt: "Este ataque causa 10 de danos vezes o número de seus Pokémon que possuem o ataque Circular.",
				de: "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Pokémon zu, die Kanon beherrschen."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
