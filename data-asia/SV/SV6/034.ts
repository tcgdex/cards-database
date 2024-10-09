import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ナミイルカ",
		'zh-tw': "波普海豚",
		th: "นามิอิรุกะ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Narumi Sato",
	dexId: [963],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。",
		'zh-tw': "牠的水環是頭部的洞 冒出來的黏膠與海水 混合後製造出來的。",
		th: "วงแหวนน้ำถูกสร้างขึ้นมาจากการผสมกันของของเหลวเหนียวหนืดที่ออกมาจากรูที่หัวและน้ำทะเล"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "アクアスラッシュ",
			'zh-tw': "水流斬",
			th: "อควาสแลช"
		},

		damage: 30,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card