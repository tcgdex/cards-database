import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "サザンドラex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "クラッシュヘッズ"
		},

		damage: 200,

		effect: {
			ja: "相手の山札を上から3枚トラッシュする。"
		}
	}, {
		cost: ["Psychic", "Darkness", "Metal", "Colorless"],

		name: {
			ja: "オブシディアン"
		},

		damage: 130,

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ130ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card