import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'es-es': "Mudbray",
		'it-it': "Mudbray",
		'de-de': "Pampuli",
		'pt-br': "Mudbray",
		'ko-kr': "머드나기"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [749],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon covers itself in mud that it has regurgitated. The mud won't dry out even if it's exposed to the sun for a long time.",
		'fr-fr': "Il s'enduit d'une boue qu'il a préalablement\nmâchée. Elle ne sèche jamais, même quand\nelle est exposée au soleil pendant des heures.",
		'es-es': "El lodo con el que se recubre es tierra que ha ingerido y\nregurgitado. No se seca por mucho tiempo que pase al sol.",
		'it-it': "Il fango che ricopre il suo corpo è terra\nruminata dal Pokémon stesso e non si secca\nmai, neppure se esposto al sole per molto tempo.",
		'de-de': "Der Schlamm, der es bedeckt, besteht aus\nwiedergekäuter Erde. Dieser trocknet selbst dann\nnicht aus, wenn er lange der Sonne ausgesetzt ist.",
		'pt-br': "Cobre-se com a lama que regurgitou. A lama não secará,\nmesmo que fique muito tempo exposta ao sol.",
		'ko-kr': "두르고 있는 진흙은 먹었던 흙을\n되새김해서 만든 것이다.\n장시간 햇볕을 쬐어도 마르지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'de-de': "Rückwärtskick",
			'pt-br': "Chute Traseiro",
			'ko-kr': "뒤로 차기"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card