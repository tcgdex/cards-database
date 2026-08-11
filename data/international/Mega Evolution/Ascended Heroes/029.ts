import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'es-mx': "Tepig",
		'de-de': "Floink",
		'it-it': "Tepig",
		'pt-br': "Tepig"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [498],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'es-es': "Lanzallamas Continuo",
			'es-mx': "Escupefuego",
			'de-de': "Stetiger Feuerhauch",
			'it-it': "Soffiofuoco Mirato",
			'pt-br': "Hálito de Fogo Constante"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "It can deftly dodge its foe’s attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869640,
			tcgplayer: 675841
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870184,
			tcgplayer: 676876
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870183,
			tcgplayer: 677016
		}
	},
	{
		type: "reverse",
		foil: "cosmos",
		thirdParty: {
			cardmarket: 878075,
			tcgplayer: 681895
		}
	},
],
}

export default card
