import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ムゲンダイナ"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [890],
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "胸の コアが ガラル地方の 大地から 涌きだす エネルギーを 吸収して 活動している。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ダイナブラスト"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Darkness", "Darkness"],

		name: {
			ja: "ワールドエンド"
		},

		damage: 230,

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。トラッシュできないなら、このワザは失敗。"
		}
	}],

	retreat: 2
}

export default card