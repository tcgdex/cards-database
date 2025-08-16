import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [870],
	set: Set,

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
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Attack",
				fr: "Attaque de Groupe",
				es: "Ataque en Equipo",
				it: "Attacco in Team",
				pt: "Ataque em Equipe",
				de: "Teamangriff"
			},
			effect: {
				en: "This attack does 30 damage for each of your Benched Pokémon that has \"Falinks\" in its name.",
				fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc ayant « Hexadron » dans son nom.",
				es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca que tenga \"Falinks\" en su nombre.",
				it: "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina con “Falinks” nel nome.",
				pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco que tenha \"Falinks” em seu nome.",
				de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, bei dem „Legios“ zum Namen gehört, 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Five of them are troopers, and one is the brass. The brass's orders are absolute."
	},

	thirdParty: {
		cardmarket: 456493,
		tcgplayer: 213200
	}
}

export default card
