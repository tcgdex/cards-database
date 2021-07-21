import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Noivern",
		fr: "Bruyverne",
		es: "Noivern",
		it: "Noivern",
		pt: "Noivern",
		de: "UHaFnir"
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				es: "Supersónico",
				it: "Supersuono",
				pt: "Supersônico",
				de: "Superschall"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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
				en: "Resonance",
				fr: "Résonance",
				es: "Resonancia",
				it: "Risonanza",
				pt: "Ressonância",
				de: "Resonanz"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

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
	retreat: 1,



}

export default card
