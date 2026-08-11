import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗い猟犬",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [229],
	hp: 60,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "不気味なハウル",
			},
			effect: {
				'ja-jp': "対戦相手のベンチがいっぱいでない場合は、手を見てください。相手がベビーポケモンまたは基本的なポケモンを持っている場合は、そのうち1つを選択して、ベンチに置きます。次に、防御ポケモンで切り替えます。",
			},
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "暗い火",
			},
			effect: {
				'ja-jp': "Dark Houndoomに闇のエネルギーカードが付いている場合、それらの1つを捨ててください。この攻撃は30ダメージに加えて20のダメージを与えます（捨てた暗闇のエネルギーに対してさらに10回以上）。いない場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
