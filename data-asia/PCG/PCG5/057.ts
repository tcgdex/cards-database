import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "アノリス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [347],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "影響",
			},
			effect: {
				ja: "オマニテ、カブト、アエロダクチル、リリープ、またはアノリスをデッキで検索し、そのうちの2つをベンチに入れます。その後、デッキをシャッフルします。新しいベンチポケモンを基本的なポケモンとして扱います。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "爪を伸ばします",
			},
			effect: {
				ja: "Anorithに反応エネルギーカードが付属している場合、この攻撃は対戦相手のベンチ付きポケモンの1つに20ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
