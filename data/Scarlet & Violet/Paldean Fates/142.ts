import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		de: "Pamo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			de: "Stromtritt"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751681,
				tcgplayer: 534577,
				cardtrader: 274325
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
	},

}

export default card
