import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		de: "Azumarill",
		'pt-br': "Azumarill",
		ko: "마릴리"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [184],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Marill"
	},

	description: {
		en: "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
		fr: "Ses longues oreilles lui permettent d'entendre tout\nce qui se passe sous l'eau de manière très distincte.",
		es: "Sus largas orejas son unos sensores excepcionales que le\npermiten diferenciar e identificar lo que oye dentro del agua.",
		it: "Le sue lunghe orecchie sono ricettori sensibilissimi.\nRiesce a distinguere e identificare ogni minimo\nrumore perfino sott'acqua.",
		de: "Seine langen Ohren sind hervorragende\nSensoren, mit denen es Geräusche unter\nWasser unterscheiden und zuordnen kann.",
		'pt-br': "Suas orelhas longas são sensores soberbos.\nEle é capaz de diferenciar os movimentos\ndos objetos nas águas e dizer o que eles são.",
		ko: "긴 귀는 뛰어난 센서.\n물속의 소리를 구별하여\n무엇이 움직이는지 알 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade",
			es: "Cascada",
			it: "Cascata",
			de: "Kaskade",
			'pt-br': "Cachoeira",
			ko: "폭포오르기"
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
