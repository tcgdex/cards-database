import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		'fr-fr': "Tropius",
		'en-us': "Tropius",
		'es-es': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
		'de-de': "Tropius"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Feuille Sangsue",
			'en-us': "Leaf Drain",
			'es-es': "Hoja Drenante",
			'it-it': "Assorbifoglia",
			'pt-br': "Dreno Folha",
			'de-de': "Blattsauger"
		},

		effect: {
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'en-us': "Heal 20 damage from this Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Brise Tropicale",
			'en-us': "Tropic Breeze",
			'es-es': "Brisa Tropical",
			'it-it': "Brezza dei Tropici",
			'pt-br': "Brisa Tropical",
			'de-de': "Tropische Brise"
		},

		effect: {
			'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'en-us': "Move all Energy from this Pokémon to 1 of your Benched Pokémon.",
			'es-es': "Mueve todas las Energías de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715479,
				tcgplayer: 497418,
				cardtrader: 248303
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715479,
				tcgplayer: 497418,
				cardtrader: 248303
			}
		},
	],

	illustrator: "Taira Akitsu",

	description: {
		'en-us': "It lives in tropical jungles. The bunch of fruit around its neck is delicious. The fruit grows twice a year.",
	},
}

export default card
