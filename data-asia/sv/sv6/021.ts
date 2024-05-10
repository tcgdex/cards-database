import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "シャンデラ",
		'zh-tw': "水晶燈火靈"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "saino misaki",
	dexId: [609],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "魂を 吸い取って 燃やす。 腕の 炎を 揺らして 相手を 催眠状態に する。",
		'zh-tw': "會吸走並燃燒掉靈魂。 透過搖晃手臂的火焰 讓對手陷入催眠狀態。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いざなうあかり",
			'zh-tw': "勸誘亮光"
		},

		effect: {
			ja: "自分の番に1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。雙方玩家各從牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "マインドルーラー",
			'zh-tw': "意志統治者"
		},

		damage: "30×",

		effect: {
			ja: "相手の手札の枚数×30ダメージ。",
			'zh-tw': "造成對手的手牌的張數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card