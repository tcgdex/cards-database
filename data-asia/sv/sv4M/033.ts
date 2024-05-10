import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "クエスパトラ",
		'zh-tw': "超能豔鴕"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [956],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "色とりどりの フリルの 隙間から サイコパワーを 放出して 時速２００キロで 疾走する。",
		'zh-tw': "會從鮮豔褶邊的縫隙間釋放出精神力量，藉此以時速２００公里的速度狂奔。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みきわめ",
			'zh-tw': "試探"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージや効果を受けない。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。在下個對手的回合結束前，這隻寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "グリッターアイズ",
			'zh-tw': "閃亮眼睛"
		},

		damage: "70+",

		effect: {
			ja: "自分のトラッシュに「リップ」があるなら、70ダメージ追加。",
			'zh-tw': "若自己的棄牌區有「莉普」，則增加70點傷害。"
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
	regulationMark: "G"
}

export default card