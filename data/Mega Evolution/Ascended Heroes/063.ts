import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		'es-mx': "Helioptile",
		de: "Eguana",
		it: "Helioptile",
		pt: "Helioptile"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [694],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			'es-mx': "Electropatada",
			de: "Stromtritt",
			it: "Dinamocalcio",
			pt: "Chute Zap"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "The frills on either side of its head have cells that generate electricity when exposed to sunlight.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869674,
			tcgplayer: 675875
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870236,
			tcgplayer: 676902
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870235,
			tcgplayer: 677042
		}
	},
],
}

export default card
