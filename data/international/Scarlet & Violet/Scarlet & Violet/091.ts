import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [669],
	set: Set,

	name: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Pollen Shot",
			'fr-fr': "Tir Pollen",
			'es-es': "Lanzamiento de Polen",
			'it-it': "Colpo Pollinare",
			'pt-br': "Arremesso de Pólen",
			'de-de': "Pollenschuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Mizue",

	description: {
		'en-us': "This Flabébé rides a red flower. Immediately after birth, this Pokémon begins flying around in search of a flower it likes.",
	},

	thirdParty: {
        cardmarket: 702387,
        tcgplayer: 487958
    }
}

export default card