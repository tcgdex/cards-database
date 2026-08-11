import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		570,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Moonless Madness",
				'fr-fr': "Folie Obscure",
				'es-es': "Demencia Nocturna",
				'it-it': "Follia Notturna",
				'pt-br': "Loucura sem Lua",
				'de-de': "Mondloser Wahn"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Edge",
				'fr-fr': "Lame Obscurité",
				'es-es': "Filo Siniestro",
				'it-it': "Lama Oscura",
				'pt-br': "Gume Sombrio",
				'de-de': "Dunkelklinge"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 30,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon.",
	},

	thirdParty: {
		cardmarket: 286335,
		tcgplayer: 107208
	}
}

export default card
