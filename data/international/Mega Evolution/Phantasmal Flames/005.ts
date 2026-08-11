import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'es-mx': "Lotad",
		'de-de': "Loturzel",
		'it-it': "Lotad",
		'pt-br': "Lotad"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [270],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "The leaf on its head is naturally dirt repellent and will stay clean even after transporting Pokémon that are covered in mud.",
	},

	illustrator: "Wintr Wandr",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857580,
				tcgplayer: 662178,
				cardtrader: 356789
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857580,
				tcgplayer: 662178,
				cardtrader: 356789
			}
		},
	],

	
}

export default card
