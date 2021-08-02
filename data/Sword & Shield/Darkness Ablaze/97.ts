import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Passimian",
		fr: "Quartermac",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				es: "Llamar a la Familia",
				it: "Cerca Famiglia",
				pt: "Chamar a Família",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
				fr: "Lance-Pierre",
				es: "Lanzamiento de Rocas",
				it: "Scaglia Pietre",
				pt: "Lançamento de Pedras",
				de: "Steinschleuderer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
