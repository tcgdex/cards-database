import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Because it nests in bramble bushes, the feathers of its chicks grow hard from being scratched by thorns.",
		de: "Da es in dornigem Gestrüpp nistet, wachsen seine Jungen mit häufigen Verletzungen durch Dornen auf, was ihre Federn abhärtet."
	},

	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		'es-mx': "Skarmory",
		de: "Panzaeron"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [227],
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Steel Cutter",
			de: "Stahlschneider"
		},

		cost: ["Metal"],

		damage: "40x",

		effect: {
			en: "Discard up to 2 Basic Metal Energy from your hand. This attack does 40 damage for each card discarded this way.",
			de: "Lege bis zu 2 Basis-{M}-Energiekarten aus deiner Hand auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895845,
				tcgplayer: 704817
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895845,
				tcgplayer: 704817
			}
		},
	],
}

export default card
