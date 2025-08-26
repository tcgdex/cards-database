import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "Surge's Raichu中t",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "ケルザップ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20のダメージに加えて、防御ポケモンにさらに30ダメージを与え、サージ中佐のライチュに取り付けられたすべての稲妻エネルギーカードを破棄します。尾の場合、この攻撃は20ダメージを与えます。",
			},
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				ja: "サンダータックル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。 Tailsの場合、SurgeのRaichu中tはそれ自体に20のダメージを与えます。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
