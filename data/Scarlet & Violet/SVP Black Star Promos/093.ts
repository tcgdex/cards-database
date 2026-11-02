import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [318],
	set: Set,

	name: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Tonji Matsuno",
	description: {
		en: "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
		fr: "Il possède une mâchoire puissante garnie de dents acérées. Les marins ne s'approchent jamais des eaux habitées par les Carvanha.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 751814,
				tcgplayer: 544183
			},
		}
	],
}

export default card
