import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [605],
	set: Set,

	name: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
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
	regulationMark: "F",


	description: {
		'en-us': "If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682126,
				tcgplayer: 451733
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682126,
				tcgplayer: 451733
			}
		},
	],
}

export default card
