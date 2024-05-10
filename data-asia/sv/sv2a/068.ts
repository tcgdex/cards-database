import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキー",
		'zh-tw': "怪力"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "４本の 腕は 考えるより 早く 反射的に 動き 何発もの パンチを 繰りだせる。",
		'zh-tw': "４隻手臂在思考之前就會反射性地行動， 使出多發拳擊。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんじょう",
			'zh-tw': "毅力"
		},

		effect: {
			ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			'zh-tw': "這隻寶可夢受到招式的傷害而【昏厥】時，自己擲1次硬幣。若為正面，則這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "マウンテンチョップ",
			'zh-tw': "山岳劈打"
		},

		damage: 100,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方2張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card