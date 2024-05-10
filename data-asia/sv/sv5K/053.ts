import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "タケルライコex",
		'zh-tw': "猛雷鼓ex",
		th: "ฟ้าคะนองคลั่งex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はじけるほうこう",
			'zh-tw': "濺射咆哮",
			th: "เสียงคำรามระเบิด"
		},

		effect: {
			ja: "自分の手札をすべてトラッシュし、山札を6枚引く。",
			'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出6張卡。",
			th: "ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด จั่วการ์ด 6 ใบจากสำรับการ์ด"
		}
	}, {
		cost: ["Lightning", "Fighting"],

		name: {
			ja: "きょくらいごう",
			'zh-tw': "極降駕",
			th: "ฟ้าคำรามสุดขีด"
		},

		damage: "70×",

		effect: {
			ja: "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。",
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的基本能量卡丟棄，造成其張數×70點傷害。",
			th: "ทิ้งพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x70"
		}
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card