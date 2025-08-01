import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Thwackey",
		fr: "Badabouin",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grookey",
		fr: "Ouistempo",
		es: "Grookey",
		it: "Grookey",
		pt: "Grookey",
		de: "Chimpep"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Taunt",
				fr: "Provoc",
				es: "Mofa",
				it: "Provocazione",
				pt: "Insulto",
				de: "Verhöhner"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double Hit",
				fr: "Coup Double",
				es: "Doble Golpe",
				it: "Doppiosmash",
				pt: "Golpe Duplo",
				de: "Doppelschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers."
	},

	dexId: [811],

	thirdParty: {
		cardmarket: 436234
	}
}

export default card
