import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Rapidash -105/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [78],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "オーバーラン",
			},
			effect: {
				ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。ヘッドの場合、それらのうちの1つを選択すると、この攻撃はそれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "炎の尾",
			},
			damage: 40,
		},
	],


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
