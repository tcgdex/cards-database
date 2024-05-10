import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ルチャブル",
		'zh-tw': "摔角鷹人"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [701],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "翼を 使い 軽やかに 跳び 相手を 華麗に 仕留める 技は 生まれ育った 森で 磨かれる。",
		'zh-tw': "使用翅膀輕盈地跳起後，華麗地置對手於死地的招式 是在出生的森林磨練出來的。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フライングエントリー",
			'zh-tw': "飛身進場"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のベンチポケモン2匹に、それぞれダメカンを1個のせる。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。在對手的2隻備戰寶可夢身上，各放置1個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ",
			'zh-tw': "翅膀攻擊"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card