import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "luvdisc",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [370],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ゲームでさえ",
			},
			effect: {
				ja: "相手のポケモンの数を数えます。その数の基本的なポケモンまでデッキを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "スタジアムプレイ",
			},
			effect: {
				ja: "スタジアムカードをプレイしている場合は、ポケモンのそれぞれから1つのダメージカウンターを削除します。対戦相手がスタジアムカードをプレイしている場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
