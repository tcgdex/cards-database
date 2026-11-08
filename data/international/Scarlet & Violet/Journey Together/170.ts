import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [831],
	set: Set,

	name: {
		'en-us': "Hop's Wooloo",
		'fr-fr': "Moumouton de Nabil",
		'es-es': "Wooloo de Paul",
		'de-de': "Hops Wolly",
		'it-it': "Wooloo di Hop",
		'pt-br': "Wooloo do Lupo",
		'es-mx': "Wooloo de Paul"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'de-de': "Schmetterkick",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'es-mx': "Patada Devastadora"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "MINAMINAMI Take",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817323,
				tcgplayer: 623597
			}
		},
	],
}

export default card
