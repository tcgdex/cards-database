import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "サケブシッポex",
		'zh-tw': "吼叫尾ex"
	},

	illustrator: "akagi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぜっきょう",
			'zh-tw': "絕叫"
		},

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。次の相手の番、相手は手札からサポートを出して使えない。",
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。在下個對手的回合，對手無法從手牌使出支援者卡。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "かみくだく",
			'zh-tw': "咬碎"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card