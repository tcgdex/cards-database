import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "アンファロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "電流を引き付けます",
			},
			effect: {
				ja: "3コインをフリップします。各ヘッドについて、デッキを稲妻エネルギーカードに検索し、1枚の稲妻ポケモンに取り付けることができます。その後、デッキをシャッフルします。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				ja: "ギガボルト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は40のダメージを与え、防御ポケモンが麻痺しています。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
