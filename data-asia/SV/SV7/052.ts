import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超甲狂犀",
		'zh-cn': "超甲狂犀",
		ja: "ドサイドン"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	description: {
		'zh-tw': "雖然大腦比鑽角犀獸還小， 但可以把因而多出的能量 全用在戰鬥上，所以非常強。",
		'zh-cn': "雖然大腦比鑽角犀獸還小， 但可以把因而多出的能量 全用在戰鬥上，所以非常強。",
		ja: "脳は サイドンよりも 小さいが そのぶんの エネルギーを すべて 戦いに 使うので 強いのだ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "廣域堡壘",
			'zh-cn': "廣域堡壘",
			ja: "ワイドウォール"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手從手牌使出支援者卡時，自己的所有寶可夢不會受到那個效果的影響。",
			'zh-cn': "只要這隻寶可夢在戰鬥場上，對手從手牌使出支援者卡時，自己的所有寶可夢不會受到那個效果的影響。",
			ja: "このポケモンがバトル場にいるかぎり、自分のポケモン全員は、相手が手札からサポートを出して使ったとき、その効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "直衝鑽",
			'zh-cn': "直衝鑽",
			ja: "ドリルライナー"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [464],

	thirdParty: {
		cardmarket: 779066
	}
}

export default card