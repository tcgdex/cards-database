import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'de-de': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'es-mx': "Metang"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'de-de': "Tanhel",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'es-mx': "Beldum"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psypunch",
			'fr-fr': "Coup de Poing Psy",
			'es-es': "Psicopuño",
			'de-de': "Psyhieb",
			'it-it': "Psicopugno",
			'pt-br': "Soco Psíquico",
			'es-mx': "Psicopuño"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'de-de': "Zen-Kopfstoß",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'es-mx': "Cabezazo Zen"
		},

		damage: 50
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
	retreat: 2,
	regulationMark: "I",
	illustrator: "Oswaldo KATO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817214,
				tcgplayer: 623489
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817214,
				tcgplayer: 623489
			}
		},
	],
}

export default card
