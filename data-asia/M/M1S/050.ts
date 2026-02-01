import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス"
	},
	illustrator: "Uninori",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	description: {
		ja: "高い知能を持ち人間の言葉を理解する。争いを嫌う優しいポケモンだ。"
	},
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			ja: "ラスターアシスト"
		},
		effect: {
			ja: "自分の番に、自分の「メガラティアスex」がベンチからバトル場に出たとき、1回使える。自分のベンチポケモンについているエネルギーを好きなだけ選び、バトルポケモンにつけ替える。"
		}
	}],
	attacks: [{
		name: {
			ja: "ドラゴンクロー"
		},
		damage: 130,
		cost: ["Water", "Psychic", "Colorless"]
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [381]
}

export default card
