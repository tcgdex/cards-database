import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'de-de': "Chillabell",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'es-mx': "Cinccino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'de-de': "Picochilla",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'es-mx': "Minccino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Smack",
			'fr-fr': "Coup de Queue",
			'es-es': "Bofetón Cola",
			'de-de': "Schweifschlag",
			'it-it': "Codasberla",
			'pt-br': "Ataque de Cauda",
			'es-mx': "Cachetazo de Cola"
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
	regulationMark: "H",
	illustrator: "En Morikura",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817278,
				tcgplayer: 623553
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817278,
				tcgplayer: 623553
			}
		},
	],
}

export default card
