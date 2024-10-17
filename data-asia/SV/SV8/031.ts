import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノツツミ"
	},

	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [991],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "ガストコリジョン"
		},

		damage: "200－",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージぶん、このワザのダメージは小さくなる。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card