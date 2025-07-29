import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
		es: "Magmortar",
		it: "Magmortar",
		pt: "Magmortar",
		de: "Magbrant"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Screen",
				fr: "Barrière de Flammes",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280460
	}
}

export default card
