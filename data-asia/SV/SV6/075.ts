import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ボスゴドラ",
		'zh-tw': "波士可多拉",
		th: "บอสโกโดรา"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Dsuke",
	dexId: [306],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "ぶ厚い 鉄板を 貫くほどの 鋭い ツノを 体当たりとともに くらわせて 敵を しとめる。",
		'zh-tw': "在撞擊敵人的同時，會用 能刺穿厚鐵板的銳利尖角 給予對方致命的一擊。",
		th: "จัดการศัตรูด้วยการซัดเขาที่แหลมคมขนาดเสียบทะลุแผ่นเหล็กหนาได้เข้าใส่ พร้อม ๆ กับพุ่งตัวกระแทก"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "アングリースラム",
			'zh-tw': "發怒猛進",
			th: "โมโหปึงปัง"
		},

		damage: "50×",

		effect: {
			ja: "自分の場のダメカンがのっているポケモンの数×50ダメージ。",
			'zh-tw': "造成自己場上的身上放置有傷害指示物的寶可夢的數量×50點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนบนกระดานฝ่ายเราที่มีตัวนับแดเมจวางอยู่ x50"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ガードクロー",
			'zh-tw': "防守利爪",
			th: "การ์ดคลอว์"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]"
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

	retreat: 3,
	regulationMark: "H"
}

export default card