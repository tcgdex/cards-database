import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Slap",
				'fr-fr': "Gifle",
				'es-es': "Bofetón",
				'it-it': "Sberla",
				'pt-br': "Tapa",
				'de-de': "Hieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Follow Me",
				'fr-fr': "Par Ici",
				'es-es': "Señuelo",
				'it-it': "Sonoqui",
				'pt-br': "Isca-viva",
				'de-de': "Spotlight"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its adorable behavior and appearance make it popular with men and women, young and old. Its numbers are few, however.",
	},

	thirdParty: {
		cardmarket: 297544,
		tcgplayer: 131002
	}
}

export default card
