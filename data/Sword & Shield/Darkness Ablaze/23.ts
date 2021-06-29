import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
		es: "Combusken",
		it: "Combusken",
		pt: "Combusken",
		de: "Jungglut"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud’Pattes",
				es: "Patada Destrucción",
				it: "Calcio Esplosivo",
				pt: "Chute Poderoso",
				de: "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Beak",
				fr: "Bec Thermique",
				es: "Pico Ígneo",
				it: "Becco Infuocato",
				pt: "Bico de Calor",
				de: "Hitzeschnabel"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
