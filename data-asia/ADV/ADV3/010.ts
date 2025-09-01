import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "トルコール",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [324],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "発電",
			},
			effect: {
				ja: "廃棄の山を検索して、最大2つの基本エネルギーカードをforeし、相手に見せて、手に入れます。",
			},
		},
		{
			cost: ["Fire"],
			name: {
				ja: "煙の煙",
			},
			effect: {
				ja: "防御ポケモンは現在燃やされています。コインをひっくり返します。尾の場合、トルコールに取り付けられた消防剤カードを捨ててください。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
