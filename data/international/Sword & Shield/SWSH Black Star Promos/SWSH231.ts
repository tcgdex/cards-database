import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		'fr-fr': "Bulbizarre",
		'de-de': "Bisasam",
		'es-es': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'it-it': "Bulbasaur",
		'en-us': "Bulbasaur"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Fouet Lianes",
			'de-de': "Rankenhieb",
			'es-es': "Látigo Cepa",
			'pt-br': "Chicote de Vinha",
			'it-it': "Frustata",
			'en-us': "Vine Whip"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Tranch'Herbe",
			'de-de': "Rasierblatt",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'it-it': "Foglielama",
			'en-us': "Razor Leaf"
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
		'en-us': "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
	},

	thirdParty: {
		cardmarket: 664337,
		tcgplayer: 275828
	}
}

export default card
