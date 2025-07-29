import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		pt: "Torracat",
		de: "Miezunder"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		726,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 372320
	}
}

export default card
