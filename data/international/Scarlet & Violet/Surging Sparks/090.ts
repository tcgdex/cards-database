import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Sand Spray",
			'fr-fr': "Jet Sableux",
			'es-es': "Rociado de Arena",
			'it-it': "Silicospruzzo",
			'pt-br': "Spray de Areia",
			'de-de': "Sandspray"
		},

		damage: 50
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
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794399,
				tcgplayer: 590038
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794399,
				tcgplayer: 590038
			}
		},
	],

	illustrator: "Koji Nakata",

}

export default card
