import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "レントラー",
		'zh-tw': "倫琴貓"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	dexId: [405],
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "壁の向こうも 見える 力で 逃げた 獲物を 追いつめるほかにも 迷子の 子どもを 捜したりする。",
		'zh-tw': "擁有能看見牆壁另一側的力量，除了可以用來追捕逃跑的獵物， 還可以用來尋找迷路的孩子。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みなぎるせんこう",
			'zh-tw': "充溢閃光"
		},

		effect: {
			ja: "自分の番に、このカードが手札にあり、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、1回使える。このカードをベンチに出す。",
			'zh-tw': "在自己的回合，若手牌有這張卡，且自己剩餘獎賞卡的張數，比對手剩餘獎賞卡的張數多，則可使用1次。將這張卡放置於備戰區。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ワイルドボルト",
			'zh-tw': "瘋狂伏特"
		},

		damage: 180,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card