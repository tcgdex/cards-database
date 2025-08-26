import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いスローブロ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [80],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "釣りをする",
			},
			effect: {
				ja: "相手は、廃棄された山から最大3匹のベビーポケモン、基本的なポケモン、および/または進化カードを選択し、デッキにシャッフルすることができます。いずれにせよ、あなたは同じことをするかもしれません。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "スプラッシュについて",
			},
			effect: {
				ja: "Slowbroを軽量するよりも防御ポケモンに加えられるエネルギーが多くある場合、この攻撃は20のダメージと20のダメージをさらに発生させます。そうでない場合、この攻撃は20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
