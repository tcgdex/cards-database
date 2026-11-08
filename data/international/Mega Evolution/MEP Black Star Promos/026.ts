import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'de-de': "Meloetta",
		'it-it': "Meloetta",
		'es-es': "Meloetta",
		'pt-br': "Meloetta"
	},

	illustrator: "Keisin",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [648],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Soothing Melody",
			'fr-fr': "Mélodie Relaxante",
			'de-de': "Beruhigende Melodie",
			'it-it': "Melodia Calmante",
			'es-es': "Melodía Bálsamo",
			'pt-br': "Melodia Salutífera"
		},

		effect: {
			'en-us': "Heal 120 damage from 1 of your Benched {P} Pokémon.",
			'fr-fr': "Soignez 120 dégâts de l'un de vos Pokémon {P} de Banc.",
			'de-de': "Heile 120 Schadenspunkte bei 1 {P}-Pokémon auf deiner Bank.",
			'it-it': "Cura uno dei Pokémon {P} nella tua panchina da 120 danni.",
			'es-es': "Cura 120 puntos de daño a uno de tus Pokémon {P} en Banca.",
			'pt-br': "Cure 120 pontos de dano de 1 dos seus Pokémon {P} no Banco."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo",
			'es-es': "Disparo Mágico",
			'pt-br': "Tiro Mágico"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 855284,
				tcgplayer: 659231
			}
		},
	],
}

export default card
