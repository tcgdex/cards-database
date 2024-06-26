import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソル",
		'zh-tw': "阿勃梭魯",
		th: "แอบโซล"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [359],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "危険を 察知する 能力を 持つがゆえに 人からは 災いを もたらす ポケモンと 誤解された。",
		'zh-tw': "由於擁有察覺危險的能力，因此牠被人們誤解是 會招來災禍的寶可夢。",
		th: "ถูกมนุษย์เข้าใจผิดว่าเป็นโปเกมอนที่นำมาซึ่งภัยพิบัติเนื่องจากมีพลังรับรู้ถึงภัยอันตราย"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ドローセンス",
			'zh-tw': "抽出意識",
			th: "ดรอว์เซนส์"
		},

		effect: {
			ja: "自分の手札が5枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。",
			'zh-tw': "從牌庫抽卡直到自己的手牌滿5張為止。若希望，在從牌庫抽卡前，將自己的任意數量的手牌丟棄。",
			th: "จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ หากต้องการ ก่อนจั่วการ์ดจากสำรับการ์ด ทิ้งการ์ดบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きょうかスラッシュ",
			'zh-tw': "強化斬",
			th: "ฟันแรงขึ้น"
		},

		damage: "20+",

		effect: {
			ja: "このポケモンに「ポケモンのどうぐ」がついているなら、60ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」卡，則增加60點傷害。",
			th: "ถ้าโปเกมอนนี้มี [ไอเท็มติดโปเกมอน] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 60"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card