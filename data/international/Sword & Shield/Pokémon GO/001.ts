import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'de-de': "Rankenhieb"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665235,
				tcgplayer: 274433
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665235,
				tcgplayer: 274433
			}
		},
	],
}

export default card
