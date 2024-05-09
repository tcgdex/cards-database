import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [143],
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はらごしらえ"
		},

		effect: {
			ja: "自分の手札からエネルギーを1枚選び、このポケモンにつける。その後、このポケモンのHPを「60」回復する。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card