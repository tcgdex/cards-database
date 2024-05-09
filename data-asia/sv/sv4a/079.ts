import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネイティオ"
	},

	illustrator: "DOM",
	category: "Pokemon",
	dexId: [178],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "過去と 未来を 見通せる。 毎日 太陽の 動きを 見続けている 不思議な ポケモン。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アカシックセンス"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。その後、自分の山札を2枚引く。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ちょうねんりき"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card