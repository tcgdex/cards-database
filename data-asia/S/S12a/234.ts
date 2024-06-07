import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 索羅亞克VSTAR",
		ja: "ヒスイ ゾロアークVSTAR"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幻影星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將自己的手牌全部丟棄，從牌庫抽出7張卡。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "牢記詛咒",
			ja: "のろいをきざむ"
		},

		effect: {
			'zh-tw': "造成自己的場上身上放置有傷害指示物的寶可夢的數量×50點傷害。",
			ja: "自分の場のダメカンがのっているポケモンの数×50ダメージ。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "ファントムスター"
		},

		effect: {
			ja: "自分の番に使える。自分の手札をすべてトラッシュし、山札を7枚引く。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card