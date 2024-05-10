import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "イルミーゼ",
		'zh-tw': "甜甜螢"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Orca",
	dexId: [314],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "バルビートを 誘導して 夜空に サインを 描く。 サインの 意味を 研究する 学者も いる。",
		'zh-tw': "會誘導電螢蟲在夜空中 描繪記號。也有些學者 在研究記號的含意。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スローパフューム",
			'zh-tw': "慢芬香"
		},

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。選擇1隻對手的備戰寶可夢，將那隻寶可夢與附加的卡全部放回對手的牌庫並重洗。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card