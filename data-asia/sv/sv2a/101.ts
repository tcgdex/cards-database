import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マルマイン",
		'zh-tw': "頑皮雷彈"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
		'zh-tw': "雖然儲存的電能越多，移動的速度也會變得越快， 但同時也會變得更容易爆炸。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ボムボムチェイン",
			'zh-tw': "轟轟連鎖"
		},

		damage: "20+",

		effect: {
			ja: "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。",
			'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」卡丟棄，增加其張數×40點傷害。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "エレキボール",
			'zh-tw': "電球"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card