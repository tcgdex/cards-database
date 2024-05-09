import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペルシアン"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [53],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "毛並みが 美しく ペットにしたがる 人も 多いが すぐ ひっかいたり するので 手強いぞ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ロケットコール"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「サカキのカリスマ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きりさく"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card