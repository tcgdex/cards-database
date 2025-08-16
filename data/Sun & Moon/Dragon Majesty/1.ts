import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				es: "Colmillo Ígneo",
				it: "Rogodenti",
				pt: "Presas de Fogo",
				de: "Feuerzahn"
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
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363474,
		tcgplayer: 175263
	}
}

export default card
