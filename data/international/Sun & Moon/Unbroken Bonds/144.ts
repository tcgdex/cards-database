import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Escaping Incisors",
				'fr-fr': "Incisives Fugueuses",
				'es-es': "Incisivos Huidizos",
				'it-it': "Incisivi di Fuga",
				'pt-br': "Incisivos Fugitivos",
				'de-de': "Fluchtzähne"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.",
	},

	thirdParty: {
		cardmarket: 372430,
		tcgplayer: 189244
	}
}

export default card
