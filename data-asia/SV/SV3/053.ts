import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ボチ",
		'zh-tw': "墓仔狗",
		th: "โบจิ"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [971],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "人と 関わることなく 命を 落とした 野良の 犬ポケモンが 生まれ変わったと 言われている。",
		'zh-tw': "據說牠是不曾接觸過人類就死去的流浪犬寶可夢 轉生而來的。",
		th: "ว่ากันว่าเป็นร่างกลับมาเกิดใหม่ของโปเกมอนหมาเร่ร่อนที่เสียชีวิตโดยที่ไม่ได้มีปฏิสัมพันธ์กับผู้คน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "じゃれつく",
			'zh-tw': "嬉鬧",
			th: "คลอเคลีย"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card