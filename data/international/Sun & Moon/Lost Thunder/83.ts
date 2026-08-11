import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'es-es': "Stunfisk",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'de-de': "Flunschlik"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		618,
	],

	hp: 110,

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
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'es-es': "Azote",
				'it-it': "Flagello",
				'pt-br': "Mangual",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "This attack does 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Blast",
				'fr-fr': "Grondement de Tonnerre",
				'es-es': "Estallido Trueno",
				'it-it': "Tuonobomba",
				'pt-br': "Explosão de Trovões",
				'de-de': "Donnerkeil"
			},
			effect: {
				'en-us': "Discard a Lightning Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie Lightning de ce Pokémon.",
				'es-es': "Descarta 1 Energía Lightning de este Pokémon.",
				'it-it': "Scarta un’Energia Lightning assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia Lightning deste Pokémon.",
				'de-de': "Lege 1 Lightning-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 50,

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

	retreat: 3,

	description: {
		'en-us': "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
	},

	thirdParty: {
		cardmarket: 365721,
		tcgplayer: 178892
	}
}

export default card
