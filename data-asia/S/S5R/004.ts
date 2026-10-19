import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [402],
	rarity: "Double rare",
	set: Set,

	name: {
		ja: "コロトックV",
		'zh-tw': "音箱蟀V",
		th: "โคโรท็อกV"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エキサイトステージ",
			'zh-tw': "激動舞台",
			th: "เอ็กไซต์สเตจ"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。このポケモンがバトル場にいるなら、4枚になるように引く。この番、すでに別の「エキサイトステージ」を使っていたなら、この特性は使えない。",
			'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌滿3張為止。若這隻寶可夢在戰鬥場上，則抽卡直到滿4張為止。在這個回合，若已經使出了其他的「激動舞台」，則這個特性無法使用。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 3 ใบ ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ให้จั่วจนได้การ์ด 4 ใบ เทิร์นนี้ ถ้าใช้ [เอ็กไซต์สเตจ] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			ja: "シザークロス",
			'zh-tw': "十字剪",
			th: "ซิสเซอร์ครอส"
		},

		effect: {
			ja: "コインを1回投げオモテなら、80ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加80點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533592, tcgplayer: 569045, cardtrader: 240001 } }
	]
}

export default card