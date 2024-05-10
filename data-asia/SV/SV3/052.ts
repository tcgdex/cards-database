import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ボチ",
		'zh-tw': "墓仔狗",
		th: "โบจิ"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [971],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "人と 関わることなく 命を 落とした 野良の 犬ポケモンが 生まれ変わったと 言われている。",
		'zh-tw': "據說牠是不曾接觸過人類就死去的流浪犬寶可夢 轉生而來的。",
		th: "ว่ากันว่าเป็นร่างกลับมาเกิดใหม่ของโปเกมอนหมาเร่ร่อนที่เสียชีวิตโดยที่ไม่ได้มีปฏิสัมพันธ์กับผู้คน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ホロウショット",
			'zh-tw': "陰森射擊",
			th: "ฮอลโลว์ช็อต"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card