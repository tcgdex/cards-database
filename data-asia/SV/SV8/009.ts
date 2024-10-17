import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ベラカス"
	},

	illustrator: "Masako Tomii",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "玉の中に 赤ん坊が 眠る。 心地よく 眠れるように 脚で 玉を まわして あやしているのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "トリプルドロー"
		},

		effect: {
			ja: "自分の山札を3枚引く。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "どんでんがえし"
		},

		damage: "40＋",

		effect: {
			ja: "自分の山札の残り枚数が3枚以下なら、200ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card