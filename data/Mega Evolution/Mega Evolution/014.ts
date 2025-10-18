import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		de: "Blanas",
		it: "Nuzleaf",
		es: "Nuzleaf",
		pt: "Nuzleaf",
		'es-mx': "Nuzleaf"
	},

	illustrator: "takashi shiraishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [274],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			it: "Botta",
			es: "Destructor",
			pt: "Pancada",
			'es-mx': "Destructor"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			de: "Fußkick",
			it: "Colpo Basso",
			es: "Patada Baja",
			pt: "Rasteira",
			'es-mx': "Patada Baja"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654353
	}
}

export default card