import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'de-de': "Haspiror",
		'pt-br': "Buneary",
		'ko-kr': "이어롤"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [427],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "If both of Buneary's ears are rolled up, something is wrong with its body or mind. It's a sure sign the Pokémon is in need of care.",
		'fr-fr': "Quand ses deux oreilles sont repliées, c'est\nsigne qu'il ne se sent pas bien physiquement\nou mentalement et qu'il a besoin de soins.",
		'es-es': "Cuando enrolla ambas orejas, es señal de que tiene algún\ntipo de malestar físico o emocional y necesita cuidados.",
		'it-it': "Se arrotola entrambe le orecchie significa che\nè afflitto da qualche disturbo fisico o emotivo.\nÈ segno che bisogna prendersi cura di lui.",
		'de-de': "Sind seine beiden Ohren aufgerollt, deutet das\ndarauf hin, dass es ihm körperlich oder psychisch\nnicht gut geht und es Zuwendung braucht.",
		'pt-br': "Se as duas orelhas de Buneary estão enroladas, algo está\nerrado com seu corpo ou mente. É um sinal claro\nde que o Pokémon precisa de cuidados.",
		'ko-kr': "양쪽 귀를 말고 있을 때는\n몸이나 마음이 좋지 않다는 뜻이므로\n관리가 필요하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'de-de': "Klaps",
			'pt-br': "Pancada",
			'ko-kr': "막치기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card