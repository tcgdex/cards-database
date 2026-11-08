import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [722],
	set: Set,

	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Add On",
			'fr-fr': "Ajout",
			'es-es': "Sumar",
			'it-it': "Supplemento",
			'pt-br': "Adicionar",
			'de-de': "Hinzufügen"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Yoshimi Miyoshi",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780891,
				tcgplayer: 560313
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780891,
				tcgplayer: 560313
			}
		},
	],
}

export default card
