import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Togekiss EX",
		fr: "Togekiss EX",
		es: "Togekiss EX",
		it: "Togekiss EX",
		pt: "Togekiss EX",
		de: "Togekiss EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Mighty Wind",
				fr: "Vent Redoutable",
				es: "Viento Poderoso",
				it: "Vento Poderoso",
				pt: "Vento Poderoso",
				de: "Mächtiger Wind"
			},
			effect: {
				en: "You may attach an Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie de votre main à l'un de vos Pokémon de Banc.",
				es: "Puedes unir 1 carta de Energía de tu mano a 1 de tus Pokémon en Banca.",
				it: "Puoi assegnare una carta Energia dalla tua mano a uno dei tuoi Pokémon in panchina.",
				pt: "Você pode ligar um card de Energia da sua mão a 1 dos seus Pokémon no Banco.",
				de: "Du kannst 1 Energiekarte von deiner Hand an 1 deiner Pokémon auf deiner Bank anlegen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Wing",
				fr: "Tornad'Aile",
				es: "Ala Huracán",
				it: "Ala Uragano",
				pt: "Asa do Furação",
				de: "Hurrikanschwinge"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 50 de danos vezes o número de caras.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic"
}

export default card
