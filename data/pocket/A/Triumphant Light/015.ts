import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'de-de': "Azumarill",
		'pt-br': "Azumarill",
		'ko-kr': "마릴리"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [184],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Marill"
	},

	description: {
		'en-us': "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
		'fr-fr': "Ses longues oreilles lui permettent d'entendre tout\nce qui se passe sous l'eau de manière très distincte.",
		'es-es': "Sus largas orejas son unos sensores excepcionales que le\npermiten diferenciar e identificar lo que oye dentro del agua.",
		'it-it': "Le sue lunghe orecchie sono ricettori sensibilissimi.\nRiesce a distinguere e identificare ogni minimo\nrumore perfino sott'acqua.",
		'de-de': "Seine langen Ohren sind hervorragende\nSensoren, mit denen es Geräusche unter\nWasser unterscheiden und zuordnen kann.",
		'pt-br': "Suas orelhas longas são sensores soberbos.\nEle é capaz de diferenciar os movimentos\ndos objetos nas águas e dizer o que eles são.",
		'ko-kr': "긴 귀는 뛰어난 센서.\n물속의 소리를 구별하여\n무엇이 움직이는지 알 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'de-de': "Kaskade",
			'pt-br': "Cachoeira",
			'ko-kr': "폭포오르기"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
