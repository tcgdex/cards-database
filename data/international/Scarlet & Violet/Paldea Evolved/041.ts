import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'fr-fr': "Tauros de Paldea",
		'en-us': "Paldean Tauros",
		'es-es': "Tauros de Paldea",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea",
		'de-de': "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Cornes Furieuses",
			'en-us': "Raging Horns",
			'es-es': "Cuernos Embravecidos",
			'it-it': "Corna Furiose",
			'pt-br': "Chifres Indomáveis",
			'de-de': "Rasende Hörner"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Plongée Aquatique",
			'en-us': "Aqua Dive",
			'es-es': "Embestida Aqua",
			'it-it': "Tuffo Acquatico",
			'pt-br': "Mergulho Aquático",
			'de-de': "Flutentaucher"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 60 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715515,
				tcgplayer: 497452,
				cardtrader: 248629
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715515,
				tcgplayer: 497452,
				cardtrader: 248629
			}
		},
	],

	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "It swims by jetting water from its horns. The most notable characteristic of the Aqua Breed is its high body fat, which allows it to float easily.",
	},
}

export default card
