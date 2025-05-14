import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mudbray",
		fr: "Tiboudet",
		es: "Mudbray",
		it: "Mudbray",
		de: "Pampuli",
		'pt-br': "Mudbray",
		ko: "머드나기"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This Pokémon covers itself in mud that it has regurgitated. The mud won't dry out even if it's exposed to the sun for a long time.",
		fr: "Il s'enduit d'une boue qu'il a préalablement\nmâchée. Elle ne sèche jamais, même quand\nelle est exposée au soleil pendant des heures.",
		es: "El lodo con el que se recubre es tierra que ha ingerido y\nregurgitado. No se seca por mucho tiempo que pase al sol.",
		it: "Il fango che ricopre il suo corpo è terra\nruminata dal Pokémon stesso e non si secca\nmai, neppure se esposto al sole per molto tempo.",
		de: "Der Schlamm, der es bedeckt, besteht aus\nwiedergekäuter Erde. Dieser trocknet selbst dann\nnicht aus, wenn er lange der Sonne ausgesetzt ist.",
		'pt-br': "Cobre-se com a lama que regurgitou. A lama não secará,\nmesmo que fique muito tempo exposta ao sol.",
		ko: "두르고 있는 진흙은 먹었던 흙을\n되새김해서 만든 것이다.\n장시간 햇볕을 쬐어도 마르지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			de: "Rückwärtskick",
			'pt-br': "Chute Traseiro",
			ko: "뒤로 차기"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card