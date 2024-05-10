import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンカラス",
		'zh-tw': "烏鴉頭頭"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [430],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "情け容赦ない 性格。 子分の ヤミカラスの 失敗は 絶対に 許さないと 言われる。",
		'zh-tw': "性格冷酷，不留情面。據說絕不會容許手下的 黑暗鴉有任何的失敗。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ダーティスロー",
			'zh-tw': "惡劣投擲"
		},

		damage: 140,

		effect: {
			ja: "自分の手札を1枚トラッシュする。トラッシュできないなら、このワザは失敗。",
			'zh-tw': "將自己的1張手牌丟棄。若無法丟棄，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card