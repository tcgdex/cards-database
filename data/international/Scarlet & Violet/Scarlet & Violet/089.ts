import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [425],
	set: Set,

	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Balloon Blast",
			'fr-fr': "Explosion Ballon",
			'es-es': "Explosión Globo",
			'it-it': "Pallonesplosione",
			'pt-br': "Explosão de Balão",
			'de-de': "Ballonexplosion"
		},

		effect: {
			'en-us': "This attack does 30 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu."
		},

		damage: "30×"
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
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Taira Akitsu",

	description: {
		'en-us': "It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing.",
	},

	thirdParty: {
        cardmarket: 702385,
        tcgplayer: 487955
    }
}

export default card