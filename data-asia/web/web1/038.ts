import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴナイト",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "速達",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em>中に、カードを描くことができます。そうした場合は、手からカードを選択して、デッキの上に置いてください。ドラゴナイトが眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "超音速飛行",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
