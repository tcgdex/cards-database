import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Swirling Petals",
				'fr-fr': "Pétales Tourbillonnants",
				'es-es': "Remolino de Pétalos",
				'it-it': "Turbine di Petali",
				'pt-br': "Turbilhão de Pétalas",
				'de-de': "Flatterblüten"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. If you do, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Si lo haces, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Se lo fai, scambia questo Pokémon con uno dei tuoi Pokémon in panchina.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Se fizer isto, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Wenn du das machst, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
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
		'en-us': "When the flowers of a well-tended flower bed bloom, it appears and celebrates with an elegant dance.",
	},

	thirdParty: {
		cardmarket: 355599,
		tcgplayer: 165743
	}
}

export default card
