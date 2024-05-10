import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリスex",
		'zh-tw': "七夕青鳥ex",
		th: "ทิลทาลิสex"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハミングヒール",
			'zh-tw': "哼唱治癒",
			th: "ฮัมมิงฮีล"
		},

		effect: {
			ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
			'zh-tw': "在自己的回合時可使用1次。將自己的所有寶可夢各恢復「20」HP。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [20]"
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			ja: "ひかりのはどう",
			'zh-tw': "光之波動",
			th: "คลื่นแสง"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card