import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [923],
	set: Set,

	name: {
		'fr-fr': "Pohmarmotte",
		'en-us': "Pawmot",
		'es-es': "Pawmot",
		'it-it': "Pawmot",
		'pt-br': "Pawmot",
		'de-de': "Pamomamo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Pohmotte",
		'en-us': "Pawmo",
		'es-es': "Pawmo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo",
		'de-de': "Pamamo"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Éclair Fulgurant",
			'en-us': "Mach Bolt",
			'es-es': "Rayo Mach",
			'it-it': "Fulmine Mach",
			'pt-br': "Raio Supersônico",
			'de-de': "Flotter Sprung"
		},

		damage: 40
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'fr-fr': "Poigne Électrique",
			'en-us': "Electric Fist",
			'es-es': "Electropuño",
			'it-it': "Pugno Voltaico",
			'pt-br': "Punho Elétrico",
			'de-de': "Elektrofaust"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715551,
				tcgplayer: 497487,
				cardtrader: 248703
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715551,
				tcgplayer: 497487,
				cardtrader: 248703
			}
		},
	],

	illustrator: "kodama",

	description: {
		'en-us': "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
	},
}

export default card
