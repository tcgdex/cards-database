import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "樹林龜",
		th: "ฮายาชิกาเมะ",
		ja: "ハヤシガメ"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "知道哪裡會湧出清澈的泉水，會讓夥伴寶可夢騎在牠背上， 運到那個地方去。",
		th: "รู้ตำแหน่งของตาน้ำสะอาดและจะให้โปเกมอนที่เป็นเพื่อนขึ้นขี่หลังพร้อมพาไปถึงจุดนั้น",
		ja: "きれいな 水が わき出る 場所を 知っていて 仲間の ポケモンを 背中に 乗せて そこまで 運ぶ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "向陽甲殼",
			th: "กระดองรับแดด",
			ja: "ひだまりのこうら"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張【草】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดโปเกมอน[หญ้า] 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ja: "自分の番に1回使える。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "飛葉快刀",
			ja: "はっぱカッター"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [388],

	thirdParty: {
		cardmarket: 687487
	}
}

export default card