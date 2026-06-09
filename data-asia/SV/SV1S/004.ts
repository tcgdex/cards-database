import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴーゴート",
		'zh-tw': "坐騎山羊",
		th: "โกโกท",
		id: "Gogoat"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [673],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ツノで 触れると 相手の 気持ちを 感じとれる。 ５０００年前から 人の 仕事を 手伝ってきた。",
		'zh-tw': "用角一碰就可以感受到對手的心情。從５０００年前起 就一直協助著人類工作至今。",
		th: "พอใช้เขาสัมผัสจะรับรู้ความรู้สึกของอีกฝ่ายได้ ช่วยงานมนุษย์มาตั้งแต่ 5000 ปีก่อน",
		id: "Gogoat dapat membaca perasaan orang yang menyentuh tanduknya.Pokémon ini telah membantu manusia sejak 5 ribu tahun lalu."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つきあげる",
			'zh-tw': "上衝",
			th: "งัด",
			id: "Dorong Naik"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束",
			th: "โซล่าร์บีม",
			id: "Solar Beam"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 692970
	}
}

export default card