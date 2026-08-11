import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	dexId: [772],

	name: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
		'es-es': "Código Cero",
		'it-it': "Tipo Zero",
		'pt-br': "Tipo Nulo",
		'de-de': "Typ:Null"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d’Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
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

	retreat: 2,

	description: {
		'en-us': "A Pokémon weapon developed for a specific mission, it went berserk during an experiment, so it was cryogenically frozen.",
	},

	thirdParty: {
		cardmarket: 408539,
		tcgplayer: 201305
	}
}

export default card
