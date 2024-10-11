import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "キュレム"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [646],
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "レシラムと ゼクロムを 凌ぐほどの 力を もつが 極低温の 冷気で 封じられてしまっている。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アンチプラズマ"
		},

		effect: {
			ja: "相手のトラッシュに、名前に「アクロマ」とつくカードがあるなら、このポケモンが「トライフロスト」を使うためのエネルギーは、エネルギー1個になる。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Metal", "Metal", "Colorless"],

		name: {
			ja: "トライフロスト"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン3匹に、それぞれ110ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	retreat: 2
}

export default card