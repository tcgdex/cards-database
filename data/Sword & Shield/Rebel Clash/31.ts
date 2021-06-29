import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scorch",
				fr: "Brûler",
				es: "Calcinar",
				it: "Ustione",
				pt: "Chamuscar",
				de: "Versengen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Fire"],
	regulationMark: "D"
}

export default card
