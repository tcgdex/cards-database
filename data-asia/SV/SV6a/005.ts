import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュナイパー"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [724],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "翼に 仕込まれた 矢羽根を 弓矢のように つがえて 放つ。 狙った 的は 外さない。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "フェザーストック"
		},

		effect: {
			ja: "自分の手札が7枚になるように、山札を引く。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ストロングショット"
		},

		damage: 170,

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚トラッシュする。トラッシュできないなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card