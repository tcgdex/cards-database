import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Ultra Necrozma",
		fr: "Ultra-Necrozma",
		es: "Ultra-Necrozma",
		it: "UltraNecrozma",
		pt: "Ultra Necrozma",
		de: "Ultra-Necrozma"
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
				en: "Ultra Burst",
				fr: "Ultra-Explosion",
				es: "Ultraexplosión",
				it: "Ultraesplosione",
				pt: "Ultraexplosão",
				de: "Ultra Burst"
			},
			effect: {
				en: "This Pokémon can’t attack unless your opponent has 2 or fewer Prize cards remaining.",
				fr: "Ce Pokémon ne peut pas attaquer, à moins qu’il ne reste 2 cartes Récompense ou moins à votre adversaire.",
				es: "Este Pokémon no puede atacar a menos que a tu rival le queden 2 cartas de Premio o menos.",
				it: "Questo Pokémon non può attaccare, a meno che il tuo avversario non abbia due o meno carte Premio rimanenti.",
				pt: "Este Pokémon não pode atacar a não ser que seu oponente tenha 2 ou menos cartas de Prêmio restantes.",
				de: "Dieses Pokémon kann nicht angreifen, es sei denn, dein Gegner hat 2 oder weniger verbleibende Preiskarten."
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
				en: "Luster of Downfall",
				fr: "Éclat de Déchéance",
				es: "Brillo de Perdición",
				it: "Tracollo Abbagliante",
				pt: "Esplendor da Ruína",
				de: "Schein des Untergangs"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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



}

export default card
