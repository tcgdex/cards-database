import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "トリミアン"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [676],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "ボサボサの 体毛を 刈りこむと 姿が 美しくなる だけでなく 身体の キレが 良くなるのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エネアシスト"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card