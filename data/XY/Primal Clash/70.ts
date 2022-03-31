import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lost in the Waves",
				fr: "Porté Disparu",
				es: "Perdido entre Olas",
				it: "Alla Deriva",
				pt: "Perdido nas Ondas",
				de: "Tarnwellen"
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Devolva este Pokémon e todos os cards ligados a ele para sua mão.",
				de: "Nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
