import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メガライボルトex"
	},
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: {
		ja: "ラクライ"
	},
	attacks: [{
		name: {
			ja: "フラッシュレイ"
		},
		damage: 120,
		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		},
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			ja: "ライオットブラスター"
		},
		damage: "200+",
		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーをすべてトラッシュし、130ダメージ追加。"
		},
		cost: ["Lightning", "Lightning", "Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 0,
	regulationMark: "I",
	rarity: "Secret Rare",
	suffix: "EX",
	dexId: [310]
}

export default card
