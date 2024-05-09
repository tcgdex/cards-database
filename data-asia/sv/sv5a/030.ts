import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モルペコ"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "胃袋が 小さいので ポケットに 入れた タネを いつも 食べてないと すぐに お腹が 空いてしまうのだ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おやつさがし"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ひろってつける"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card