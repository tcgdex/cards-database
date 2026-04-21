import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ブレイクスルー"
		},

		damage: 130,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Grass", "Fire", "Psychic"],

		name: {
			ja: "ジルコンロード"
		},

		damage: 180,

		effect: {
			ja: "のぞむなら、自分の山札を5枚引く。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None",

	thirdParty: {
		cardmarket: 787611
	}
}

export default card