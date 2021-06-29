import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				es: "Psicorrayo",
				it: "Psicoraggio",
				pt: "Feixe Psíquico",
				de: "Psystrahl"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Explosion",
				fr: "Explosion",
				es: "Explosión",
				it: "Esplosione",
				pt: "Explosão",
				de: "Explosion"
			},
			effect: {
				en: "This Pokémon also does 120 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 120 dégâts.",
				es: "Este Pokémon también se hace 120 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 120 danni a se stesso.",
				pt: "Este Pokémon também causa 120 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 120 Schadenspunkte zu."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
