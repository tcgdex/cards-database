import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It blocks opponents' attacks with the ice that shields its body. If the ice breaks, this Pokémon uses cold air to quickly create new ice.",
	},


	name: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'es-mx': "Bergmite",
		'de-de': "Arktip",
		'it-it': "Bergmite",
		'pt-br': "Bergmite"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [712],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Chilly",
			'fr-fr': "Glacial",
			'es-es': "Fresquito",
			'es-mx': "Frialdad",
			'de-de': "Frösteln",
			'it-it': "Addiaccio",
			'pt-br': "Frio"
		},

		cost: ["Water"],
		damage: 10
	}, {
		name: {
			'en-us': "Frost Breath",
			'fr-fr': "Souffle Glacé",
			'es-es': "Vaho Gélido",
			'es-mx': "Vaho Helado",
			'de-de': "Eisesodem",
			'it-it': "Alitogelido",
			'pt-br': "Respiração de Gelo"
		},

		cost: ["Water", "Colorless", "Colorless"],
		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886415,
				tcgplayer: 693456
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886415,
				tcgplayer: 693456
			}
		},
	],
}

export default card
