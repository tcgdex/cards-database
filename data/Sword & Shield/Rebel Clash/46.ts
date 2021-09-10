import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Split Spiral Punch",
				fr: "Coup d’Poing en Demi Spirale",
				es: "Puño en Espiral Cortante",
				it: "Spiralpugno Squarciante",
				pt: "Soco Espiral Dividido",
				de: "Spiralhieb"
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
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Resonance",
				fr: "Résonance",
				es: "Resonancia",
				it: "Risonanza",
				pt: "Ressonância",
				de: "Resonanz"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 120 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 120 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 170,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "The vibrating of the bumps all over its body causes earthquake-like tremors. Seismitoad and Croagunk are similar species."
	}
}

export default card
