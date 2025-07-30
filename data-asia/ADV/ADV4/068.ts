import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "シフトリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [275],
	hp: 110,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "押しのけます",
			},
			effect: {
				ja: "対戦相手の手を見て、そこにある基本的なポケモンまたは進化カードを1つ選択します。相手はそれを彼または彼女のデッキの底に置きます。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "超自然的な力",
			},
			effect: {
				ja: "相手と同じ数のカードを手に持っている場合、この攻撃は40ダメージに加えて40ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
