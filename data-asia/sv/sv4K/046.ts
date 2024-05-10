import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "クロバット",
		'zh-tw': "叉字蝠",
		th: "โครแบท"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [169],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "４枚の 羽を 自在に 操り 羽ばたく。 狭い 洞窟でも スピードを 落とさず 飛びまわれる。",
		'zh-tw': "能夠自在地控制４隻翅膀振翅飛翔。即使是在狹窄的 洞窟裡也能毫不減速地飛舞。",
		th: "ควบคุมปีกทั้งสี่ให้กระพือได้ตามใจนึก แม้แต่ในถ้ำแคบก็สามารถบินวนเวียนได้โดยไม่ลดความเร็ว"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マッドエコー",
			'zh-tw': "泥巴迴響",
			th: "แมดเอคโค"
		},

		damage: 50,

		effect: {
			ja: "自分はグッズまたはサポートのどちらかを選ぶ。次の相手の番、相手は選ばれたトレーナーズを手札から出して使えない。",
			'zh-tw': "自己選擇物品卡或者支援者卡任一方。在下個對手的回合，對手無法從手牌使出被選擇的訓練家卡。",
			th: "ฝ่ายเราเลือกการ์ดไอเท็มหรือการ์ดซัพพอร์ตอย่างใดอย่างหนึ่ง เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดเทรนเนอร์ที่ถูกเลือกไว้จากบนมือออกมาใช้ได้"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "カッターウインド",
			'zh-tw': "利刃之風",
			th: "คัตเตอร์วินด์"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card