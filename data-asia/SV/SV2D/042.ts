import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "マケンカニ",
		'zh-tw': "好勝蟹",
		th: "มาเค็นคานิ",
		id: "Crabrawler"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [739],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "木を 殴りつけ 木の実を 落として 食べる。 トレーニングしつつ エサも 採れて 一石二鳥 なのだ。",
		'zh-tw': "會擊落樹上的樹果來吃。訓練和覓食都能同時達成， 簡直可以說是一舉兩得。",
		th: "ต่อยต้นไม้ให้ผลไม้หล่นลงมาแล้วเก็บกิน ได้ฝึกต่อยทั้งยังได้อาหาร เรียกว่ายิงปืนนัดเดียวได้นกสองตัวเลยล่ะ",
		id: "Crabrawler dapat mengambil makanan sekaligus berlatih dengan memukul-mukul pohon dan memakan buah beri yang jatuh."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんこつ",
			'zh-tw': "拳骨",
			th: "กำปั้น",
			id: "Kepalan Tinju"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マグナムパンチ",
			'zh-tw': "增量拳",
			th: "แมกนัมพันช์",
			id: "Magnum Punch"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705346
	}
}

export default card