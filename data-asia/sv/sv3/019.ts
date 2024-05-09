import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クイタラン"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [631],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎を ベロの ように 使う。 アイアントの 硬い 外骨格を じわじわと 溶かし いただくのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "エナジーバーナー"
		},

		damage: "30＋",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card