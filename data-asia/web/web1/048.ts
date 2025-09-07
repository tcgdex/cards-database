import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "マチャンプ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "怒りを揺さぶる",
			},
			effect: {
				ja: "マチャンプのダメージカウンターの数に等しい数のコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "逃げる",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御ポケモンでそれを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
