import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [522],
	set: Set,

	name: {
		en: "Blitzle",
		fr: "Zébibron",
		de: "Elezeba",
		it: "Blitzle",
		pt: "Blitzle",
		es: "Blitzle",
		'es-mx': "Blitzle"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			pt: "Chute Poderoso",
			es: "Patada Destrucción",
			'es-mx': "Patada Devastadora"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			de: "Stromtritt",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			es: "Electropatada",
			'es-mx': "Electropatada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835963
	}
}

export default card