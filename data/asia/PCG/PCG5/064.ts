import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "スピンダ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [327],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "パターンの気晴らし",
			},
			effect: {
				ja: "Spindaがあなたのアクティブなポカモンである限り、相手の基本的なPokã©Monが攻撃を試みるたびに、相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 1つ以上のパターンの注意散漫Pokã©-Body各ターンを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "気まぐれなドロー",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。各ヘッドについて、2枚のカードを描きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ダブルエッジ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、Spindaはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
