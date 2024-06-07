import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロロームex",
		'zh-tw': "普隆隆姆ex",
		th: "โบรโรโรมex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "チューンアップ",
			'zh-tw': "調節",
			th: "แต่งเครื่อง"
		},

		effect: {
			ja: "このポケモンは、「ポケモンのどうぐ」を4枚までつけられる。（この特性がなくなったとき、自分は「ポケモンのどうぐ」を1枚になるようにトラッシュする。）",
			'zh-tw': "這隻寶可夢身上最多可附有4張「寶可夢道具」卡。（這個特性消除時，自己將「寶可夢道具」卡丟棄直到變為1張為止。）",
			th: "โปเกมอนนี้ สามารถติดการ์ด [ไอเท็มติดโปเกมอน] ได้สูงสุด 4 ใบ (เมื่อความสามารถนี้หายไป ให้ฝ่ายเราทิ้ง [ไอเท็มติดโปเกมอน] จนเหลือ 1 ใบที่ตำแหน่งทิ้งการ์ด)"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "ワイルドドリフト",
			'zh-tw': "瘋狂甩尾",
			th: "ไวลด์ดริฟต์"
		},

		damage: 170,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card