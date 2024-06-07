import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ホーホー"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	dexId: [163],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "いつも 一本足で 立っている。 脚を 入れ替える 瞬間は 素早くて なかなか 見られない。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みはりばん"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモンについている基本エネルギーは、相手のグッズまたはサポートによる、トラッシュする効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はばたく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card