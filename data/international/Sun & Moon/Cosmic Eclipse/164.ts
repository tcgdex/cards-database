import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Ultra Necrozma",
		'fr-fr': "Ultra-Necrozma",
		'es-es': "Ultra-Necrozma",
		'it-it': "UltraNecrozma",
		'pt-br': "Ultra Necrozma",
		'de-de': "Ultra-Necrozma"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		800,
	],

	hp: 110,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ultra Burst",
				'fr-fr': "Ultra-Explosion",
				'es-es': "Ultraexplosión",
				'it-it': "Ultraesplosione",
				'pt-br': "Ultraexplosão",
				'de-de': "Ultra Burst"
			},
			effect: {
				'en-us': "This Pokémon can’t attack unless your opponent has 2 or fewer Prize cards remaining.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer, à moins qu’il ne reste 2 cartes Récompense ou moins à votre adversaire.",
				'es-es': "Este Pokémon no puede atacar a menos que a tu rival le queden 2 cartas de Premio o menos.",
				'it-it': "Questo Pokémon non può attaccare, a meno che il tuo avversario non abbia due o meno carte Premio rimanenti.",
				'pt-br': "Este Pokémon não pode atacar a não ser que seu oponente tenha 2 ou menos cartas de Prêmio restantes.",
				'de-de': "Dieses Pokémon kann nicht angreifen, es sei denn, dein Gegner hat 2 oder weniger verbleibende Preiskarten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
			],
			name: {
				'en-us': "Luster of Downfall",
				'fr-fr': "Éclat de Déchéance",
				'es-es': "Brillo de Perdición",
				'it-it': "Tracollo Abbagliante",
				'pt-br': "Esplendor da Ruína",
				'de-de': "Schein des Untergangs"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This is its form when it has absorbed overwhelming light energy. It fires laser beams from all over its body.",
	},

	thirdParty: {
		cardmarket: 408449,
		tcgplayer: 201648
	}
}

export default card
