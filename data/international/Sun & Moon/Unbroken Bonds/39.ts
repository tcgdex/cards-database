import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'es-es': "Poliwrath",
		'it-it': "Poliwrath",
		'pt-br': "Poliwrath",
		'de-de': "Quappo"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud’Phalange",
				'es-es': "Puño con Nudillos",
				'it-it': "Noccapugno",
				'pt-br': "Soco com Punho",
				'de-de': "Knöchelhieb"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swirly Rush",
				'fr-fr': "Ruée en Tourbillon",
				'es-es': "Embestida Remolino",
				'it-it': "Arrembaggio Spirale",
				'pt-br': "Investida Espiral",
				'de-de': "Wirbelrausch"
			},
			effect: {
				'en-us': "If Poliwag and Poliwhirl are on your Bench, this attack does 90 more damage.",
				'fr-fr': "Si Ptitard et Têtarte sont sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si Poliwag y Poliwhirl están en tu Banca, este ataque hace 90 puntos de daño más.",
				'it-it': "Se Poliwag e Poliwhirl sono nella tua panchina, questo attacco infligge 90 danni in più.",
				'pt-br': "Se Poliwag e Poliwhirl estiverem no seu Banco, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn sich Quapsel und Quaputzi auf deiner Bank befinden, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It's quite a gifted swimmer, even among Water-type Pokémon, but it normally spends its time on land.",
	},

	thirdParty: {
		cardmarket: 372330,
		tcgplayer: 189114
	}
}

export default card
