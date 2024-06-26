import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "チャデス",
		'zh-tw': "斯魔茶",
		th: "ฉะเดธ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Souichirou Gunjima",
	dexId: [1012],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
		'zh-tw': "雖然這種寶可夢看起來像是 來悲茶的地區型態，但最近 被發現其實兩者毫無關係。",
		th: "แม้จะดูเหมือนฟอร์มตามภูมิภาคของยาบาฉะ แต่ไม่นานมานี้มีการค้นพบแล้วว่ามันเป็นโปเกมอนที่ไม่เกี่ยวข้องกันโดยสิ้นเชิง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "おちゃだし",
			'zh-tw': "上茶",
			th: "เสิร์ฟน้ำชา"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【草】能量」卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card