import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ナカヌチャン"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [958],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "金属の ガラクタ山が 棲み処。 ハンマーの 強度を 試すため 仲間同士で 激しく 打ち合う。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ごうきんスイング"
		},

		damage: "20＋",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card