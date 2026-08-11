import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptéra",
		'es-es': "Aerodactyl",
		'it-it': "Aerodactyl",
		'pt-br': "Aerodactyl",
		'de-de': "Aerodactyl"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jet Draft",
				'fr-fr': "Souffle Supersonique",
				'es-es': "Corriente Jet",
				'it-it': "Scia Jet",
				'pt-br': "Vento de Jato",
				'de-de': "Düsendurchzug"
			},
			effect: {
				'en-us': "Discard a Special Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia Especial ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	evolveFrom: {
		'en-us': "Old Amber Aerodactyl",
		'fr-fr': "Vieil Ambre Ptéra",
		'es-es': "Ámbar Viejo Aerodactyl",
		'it-it': "Ambra Antica di Aerodactyl",
		'pt-br': "Âmbar Velho de Aerodactyl",
		'de-de': "Altbernstein Aerodactyl"
	},

	description: {
		'en-us': "This vicious Pokémon is said to have flown in ancient skies while shrieking high-pitched cries.",
	},

	thirdParty: {
		cardmarket: 289897,
		tcgplayer: 117851
	}
}

export default card
