import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		pt: "Mienshao",
		de: "Wie-Shu"
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		620,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		pt: "Mienfoo",
		de: "Lin-Fu"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Aero Turn",
				fr: "Tour Aérien",
				es: "Giro Aéreo",
				it: "Virata",
				pt: "Virada Aérea",
				de: "Aero-Kehre"
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Devolva este Pokémon e todos os cards ligados a ele para sua mão.",
				de: "Nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
				es: "Patada Salto Alta",
				it: "Calcinvolo",
				pt: "Chute de Pulo Alto",
				de: "Turmkick"
			},

			damage: 40,

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
