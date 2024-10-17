import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		ja: "テラパゴスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ユニオンビート"
		},

		damage: "30×",

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番には使えない。自分のベンチポケモンの数×30ダメージ。"
		}
	}, {
		cost: ["Grass", "Water", "Lightning"],

		name: {
			ja: "クラウンオパール"
		},

		damage: 180,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモン（ポケモンをのぞく）からワザのダメージを受けない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card