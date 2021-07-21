import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		311,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Draw for Everybody",
				fr: "Pioche Pour Tous",
				es: "Robo por Todos",
				it: "Pesca Comunitaria",
				pt: "Compra Geral",
				de: "Ziehen für alle"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent’s).",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada Pokémon en Banca (tanto tuyos como de tu rival).",
				it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada Pokémon no Banco (seus e do seu oponente).",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jedes Pokémon auf der Bank (deiner und der deines Gegners)."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},

			damage: 30,

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
