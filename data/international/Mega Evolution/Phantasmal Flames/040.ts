import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'es-es': "Meloetta",
		'es-mx': "Meloetta",
		'de-de': "Meloetta",
		'it-it': "Meloetta",
		'pt-br': "Meloetta"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [648],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Soothing Melody",
			'fr-fr': "Mélodie Relaxante",
			'es-es': "Melodía Bálsamo",
			'es-mx': "Melodía Apaciguadora",
			'de-de': "Beruhigende Melodie",
			'it-it': "Melodia Calmante",
			'pt-br': "Melodia Salutífera"
		},

		effect: {
			'en-us': "Heal 120 damage from 1 of your Benched {P} Pokémon.",
			'fr-fr': "Soignez 120 dégâts de l'un de vos Pokémon {P} de Banc.",
			'es-es': "Cura 120 puntos de daño a uno de tus Pokémon {P} en Banca.",
			'es-mx': "Cura 120 puntos de daño a 1 de tus Pokémon {P} en Banca.",
			'de-de': "Heile 120 Schadenspunkte bei 1 {P}-Pokémon auf deiner Bank.",
			'it-it': "Cura uno dei Pokémon {P} nella tua panchina da 120 danni.",
			'pt-br': "Cure 120 pontos de dano de 1 dos seus Pokémon {P} no Banco."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
	},

	illustrator: "MINAMINAMI Take",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857615,
				tcgplayer: 662194,
				cardtrader: 356823
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857615,
				tcgplayer: 662194,
				cardtrader: 356823
			}
		},
	],
}

export default card
