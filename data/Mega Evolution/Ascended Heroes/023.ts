import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Slugma",
		fr: "Limagma de Luth",
		es: "Slugma de Eco",
		'es-mx': "Slugma de Ethan",
		de: "Klarins Schneckmag",
		it: "Slugma di Armonio",
		pt: "Slugma do Ethan"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [218],

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
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869634,
			tcgplayer: 675835
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869634,
			tcgplayer: 675835
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870173,
			tcgplayer: 676871
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870174,
			tcgplayer: 677011
		}
	},
],
}

export default card