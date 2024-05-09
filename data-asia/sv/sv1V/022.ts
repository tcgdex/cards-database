import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロスター"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [693],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "ハサミから 撃ちだす 海水の 砲弾の 威力は タンカーの 船体を 貫くほどだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "みずでっぽう"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アクアキャノン"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card