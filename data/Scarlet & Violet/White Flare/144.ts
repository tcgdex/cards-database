import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [629],
	set: Set,

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		de: "Skallyk",
		it: "Vullaby",
		pt: "Vullaby",
		es: "Vullaby",
		'es-mx': "Vullaby"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Playful Kick",
			fr: "Coup de Pied de Garnement",
			de: "Verspielter Kick",
			it: "Calcio Briccone",
			pt: "Chute Brincalhão",
			es: "Patada Juguetona",
			'es-mx': "Patada Juguetona"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836173
	}
}

export default card