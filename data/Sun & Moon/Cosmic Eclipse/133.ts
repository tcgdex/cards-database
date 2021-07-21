import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 100,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ominous News",
				fr: "Mauvais Augure",
				es: "Noticias Aciagas",
				it: "Notizie Allarmanti",
				pt: "Mau Agouro",
				de: "Unheilsbote"
			},
			effect: {
				en: "Discard a Special Energy from 1 of your opponent’s Pokémon.",
				fr: "Défaussez une Énergie spéciale de l’un des Pokémon de votre adversaire.",
				es: "Descarta 1 Energía Especial de 1 de los Pokémon de tu rival.",
				it: "Scarta un’Energia speciale assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Descarte 1 Energia Especial de 1 dos Pokémon do seu oponente.",
				de: "Lege 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dirty Throw",
				fr: "Vilain Lancer",
				es: "Lanzamiento Injusto",
				it: "Brutto Tiro",
				pt: "Jogada Suja",
				de: "Schmutziger Wurf"
			},
			effect: {
				en: "Discard a card from your hand. If you can’t discard a card, this attack does nothing.",
				fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
				es: "Descarta 1 carta de tu mano. Si no puedes descartar 1 carta, este ataque no hace nada.",
				it: "Scarta una delle carte che hai in mano. Se non puoi scartare una carta, questo attacco non ha effetto.",
				pt: "Descarte 1 carta da sua mão. Se não puder descartar 1 carta, este ataque não fará nada.",
				de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du keine Karte ablegen kannst, hat diese Attacke keine Auswirkungen."
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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
