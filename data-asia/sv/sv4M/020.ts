import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノツツミ",
		'zh-tw': "鐵包袱"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [991],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。",
		'zh-tw': "與古書裡記載的神秘物體長得很相像的寶可夢。過去只被目擊過２次。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハイパーブロアー",
			'zh-tw': "高級出風機"
		},

		effect: {
			ja: "このポケモンがベンチにいるなら、自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、このポケモンと、ついているすべてのカードを、トラッシュする。",
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換（由對手選擇放置於戰鬥場的寶可夢）。然後，將這隻寶可夢與附加的卡全部丟棄。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "れいきゃくジェット",
			'zh-tw': "冷卻噴射"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このワザを受けた進化ポケモンは、ワザが使えない。",
			'zh-tw': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card