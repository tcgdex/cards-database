import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "マダツボミ" },
	dexId: [70],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ウツドン",
		'zh-tw': "口呆花",
		th: "อุซึดง"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
		'zh-tw': "會先吐出有毒的粉末，讓對手停止行動後，再用溶解液解決對手。",
		th: "ก่อนอื่นจะพ่นผงพิษหยุดการเคลื่อนไหวของฝ่ายตรงข้ามไว้ก่อน แล้วปิดท้ายด้วยของเหลวทำละลาย"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きけんなねんえき",
			'zh-tw': "危險黏液",
			th: "เมือกอันตราย"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをどくとやけどにする。",
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將對手的戰鬥寶可夢【中毒】與【灼傷】。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ [พิษ] และ [ไหม้]"
		}
	}],

	attacks: [{
		name: {
			ja: "つるのムチ",
			'zh-tw': "藤鞭",
			th: "แส้เถาวัลย์"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533582, tcgplayer: 569043, cardtrader: 239999 } }
	]
}

export default card