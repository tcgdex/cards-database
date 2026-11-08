import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
		"Grass",
	],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'de-de': "Ignivor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Shimmering Scales",
				'fr-fr': "Écailles Scintillantes",
				'es-es': "Escamas Relucientes",
				'it-it': "Scaglialuccicante",
				'pt-br': "Escamas Brilhantes",
				'de-de': "Schimmernde Schuppen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused. If tails, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt verwirrt. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Hurricane",
				'fr-fr': "Ouragan Puissant",
				'es-es': "Huracán Poderoso",
				'it-it': "Tifone Potente",
				'pt-br': "Poder do Furacão",
				'de-de': "Power-Orkan"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
				'es-es': "Descarta todas las Energías unidas a este Pokémon.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia ligada a este Pokémon.",
				'de-de': "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun.",
	},

	thirdParty: {
		cardmarket: 291522,
		tcgplayer: 121004
	}
}

export default card
