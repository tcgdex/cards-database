import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "ガラル バリヤード" },
	dexId: [866],
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "ガラル バリコオル",
		'zh-tw': "伽勒爾 踏冰人偶",
		th: "กาลาร์ บาลิโคโอรุ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ユーモラスな 動きで みんなの 人気者。 お腹の 模様から サイコパワーを 放出する。",
		'zh-tw': "幽默的動作使牠獲得了眾人的喜愛。能從腹部的圖案釋放出精神力量。",
		th: "เป็นที่นิยมเพราะมีท่าทีเคลื่อนไหวที่น่าขบขัน ปลดปล่อยพลังจิตออกมาจากลวดลายบนท้อง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ボールジャグリング",
			'zh-tw': "球戲法",
			th: "บอลจักกลิ้ง"
		},

		effect: {
			ja: "自分の手札から名前に「ボール」とつくグッズを好きなだけトラッシュし、その枚数×40ダメージ追加。",
			'zh-tw': "從自己的手牌將任意數量的名稱中有「球」的物品卡丟棄，增加其張數×40點傷害。",
			th: "นำการ์ดไอเท็มที่ในชื่อมีคำว่า [บอล] จากการ์ดบนมือฝ่ายเราตามจำนวนที่ชอบทิ้งที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มขึ้นตามจำนวนใบนั้น x 40"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "フロストスマッシュ",
			'zh-tw': "冰霜粉碎",
			th: "ฟรอสต์สแมช"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533677, tcgplayer: 569062, cardtrader: 240026 } }
	]
}

export default card