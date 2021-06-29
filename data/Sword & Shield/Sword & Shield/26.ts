import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

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
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Claws",
				fr: "Griffes Enflammées",
				es: "Garras de Fuego",
				it: "Artigli Infuocati",
				pt: "Garras de Fogo",
				de: "Feuerkrallen"
			},

			damage: 50,

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
