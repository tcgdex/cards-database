import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [926],
	set: Set,

	name: {
		'en-us': "Fidough",
		'fr-fr': "Pâtachiot",
		'es-es': "Fidough",
		'it-it': "Fidough",
		'pt-br': "Fidough",
		'de-de': "Hefel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
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
			type: 'normal',
			thirdParty: {
				cardmarket: 751575,
				tcgplayer: 534184,
				cardtrader: 274222
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751575,
				tcgplayer: 534184,
				cardtrader: 274222
			}
		},
		{
			type: 'reverse',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 794905
			}
		},
	],

	illustrator: "Mizue",

	description: {
		'en-us': "This Pokémon is smooth and moist to the touch. Yeast in Fidough's breath induces fermentation in the Pokémon's vicinity.",
	},

}

export default card
