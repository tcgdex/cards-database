import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Girafarig",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [203],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "同期された検索",
			},
			effect: {
				ja: "Girafarigと防御ポケモンがそれらに同じ量のエネルギーを持っている場合は、デッキから1枚のカードを選んで手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "衝撃を破る",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対するポケモンのリトリートコストで、それぞれの無色エネルギーに対して10ダメージを与えます（リトリートコストに効果を適用した後）。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
