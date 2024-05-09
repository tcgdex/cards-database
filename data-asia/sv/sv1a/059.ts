import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "サザンドラ"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [635],
	hp: 180,
	types: ["Darkness"],

	description: {
		ja: "本体の 頭のみが 脳を 持っている。 知性は 高いが 破壊のことしか 考えていない。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "トライハウル"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から3枚見て、その中からエネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはトラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ダークカッター"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card