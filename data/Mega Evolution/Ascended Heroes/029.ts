import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		'es-mx': "Tepig",
		de: "Floink",
		it: "Tepig",
		pt: "Tepig"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Steady Firebreathing",
			fr: "Crachage de Feu Régulier",
			es: "Lanzallamas Continuo",
			'es-mx': "Escupefuego",
			de: "Stetiger Feuerhauch",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "J",

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
		thirdParty: {
			cardmarket: 869640,
			tcgplayer: 675841
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870183,
			tcgplayer: 676876
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870184,
			tcgplayer: 677016
		}
	},
],
}

export default card
