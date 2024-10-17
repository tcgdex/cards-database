import { Card } from "../../../interfaces"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		ja: "かがやくゲッコウガ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かくしふだ"
		},

		effect: {
			ja: "自分の番に、自分の手札からエネルギーを1枚トラッシュするなら、1回使える。自分の山札を2枚引く。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "げっこうしゅりけん"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン2匹に、それぞれ90ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card