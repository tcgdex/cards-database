import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
		es: "Salazzle",
		it: "Salazzle",
		pt: "Salazzle",
		de: "Amfira"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		it: "Salandit",
		pt: "Salandit",
		de: "Molunk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
				es: "Llama Abrasadora",
				it: "Fiamme Ustionanti",
				pt: "Chama Cauterizante",
				de: "Sengende Flammen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme Éclatante",
				es: "Llama Viva",
				it: "Splendifiamma",
				pt: "Chama Reluzente",
				de: "Helle Flamme"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Only female Salazzle exist. They emit a gas laden with pheromones to captivate male Salandit."
	}
}

export default card
