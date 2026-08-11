import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [694],
	set: Set,

	name: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			it: "Shock Statico",
			pt: "Choque de Estática",
			de: "Statischer Schock"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
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
	regulationMark: "F",


	description: {
		en: "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon's electric moves.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691766,
				tcgplayer: 478158
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691766,
				tcgplayer: 478158
			}
		},
	],
}

export default card
