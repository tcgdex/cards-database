import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [662],
	set: Set,

	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	illustrator: "Narumi Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante",
			'de-de': "Stetiger Feuerhauch"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Fletchinder launches embers into the den of its prey. When the prey comes leaping out, Fletchinder's sharp talons finish it off.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682070,
				tcgplayer: 451659
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682070,
				tcgplayer: 451659
			}
		},
	],
}

export default card
