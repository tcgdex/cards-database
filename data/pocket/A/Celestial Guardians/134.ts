import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
		'es-es': "Trumbeak",
		'it-it': "Trumbeak",
		'de-de': "Trompeck",
		'pt-br': "Trumbeak",
		'ko-kr': "크라파"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [732],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Pikipek"
	},

	description: {
		'en-us': "It can bend the tip of its beak to produce over a hundred different cries at will.",
		'fr-fr': "Ce Pokémon est capable de produire plus de cent\nsons différents en recourbant le bout de son bec.",
		'es-es': "Al torcer la punta del pico es capaz de emitir\na su antojo más de 100 graznidos diferentes.",
		'it-it': "Mutando l'estremità del becco è in grado\ndi emettere più di 100 cinguettii differenti.",
		'de-de': "Indem es seine Schnabelspitze verformt, kann es\nmehr als 100 verschiedene Rufe ausstoßen.",
		'pt-br': "Pode entortar a ponta de seu bico para emitir\nmais de cem sons diferentes.",
		'ko-kr': "부리의 끝을 뒤로 젖혀\n100가지 이상의 울음소리를\n자유롭게 낼 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'de-de': "Gleiten",
			'pt-br': "Planeio",
			'ko-kr': "활공"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card