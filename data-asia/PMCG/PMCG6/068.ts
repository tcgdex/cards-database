import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "giovanniのmeowth（u）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [52],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "偽の慈善",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手のデッキの一番上のカードを見てください。トレーナーカードの場合は、相手の捨てられた山に入れてください。そうでなければ、それを彼または彼女の手に入れてください。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "二重スクラッチ",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
