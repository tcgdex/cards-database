import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "チャデス"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Souichirou Gunjima",
	dexId: [1012],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "おちゃだし"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ふいをつく"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
