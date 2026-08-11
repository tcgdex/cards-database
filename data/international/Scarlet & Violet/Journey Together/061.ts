import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'de-de': "Tanhel",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'es-mx': "Beldum"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'de-de': "Rundumangriff",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'es-mx': "Ataque Giratorio"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'de-de': "Strahl",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'es-mx': "Rayo"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Izucch",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817213,
				tcgplayer: 623488
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817213,
				tcgplayer: 623488
			}
		},
	],
}

export default card
