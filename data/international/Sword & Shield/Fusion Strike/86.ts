import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu V",
		'fr-fr': "Pikachu V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu V",
		'pt-br': "Pikachu V",
		'de-de': "Pikachu V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'de-de': "Schweifvertrimmer",
			'es-es': "Coletón",
			'pt-br': "Surra de Cauda",
			'it-it': "Codabotta"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'de-de': "Donnerblitz",
			'es-es': "Rayo",
			'pt-br': "Relâmpago",
			'it-it': "Fulmine"
		},

		damage: 100
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582411,
				tcgplayer: 253241
			}
		},
	],
}

export default card
