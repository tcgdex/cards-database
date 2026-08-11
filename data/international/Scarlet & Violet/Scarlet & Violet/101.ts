import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [955],
	set: Set,

	name: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Tika Matsuno",

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	description: {
		'en-us': "Flittle's toes levitate about half an inch above the ground because of the psychic power emitted from the frills on the Pokémon's belly.",
	},

	thirdParty: {
        cardmarket: 702397,
        tcgplayer: 487975
    }
}

export default card