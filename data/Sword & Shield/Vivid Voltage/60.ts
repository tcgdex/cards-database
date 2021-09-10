import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Wild Shock",
				fr: "Éclair Sauvage",
				es: "Voltio Salvaje",
				it: "Shock Feroce",
				pt: "Choque Selvagem",
				de: "Wilder Schock"
			},
			effect: {
				en: "This Pokémon also does 60 damage to itself. Your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Ce Pokémon s’inflige aussi 60 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Este Pokémon también se hace 60 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Questo Pokémon infligge anche 60 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Este Pokémon também causa 60 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Paralisado.",
				de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When the interior part of its tail spins like a motor, Zekrom can generate many bolts of lightning to blast its surroundings."
	}
}

export default card
