import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "トーチの星",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [255],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "花火",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、Torchic {{Star | This Pokemon}}に取り付けられた火災エネルギーカードを捨てます。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "バックバック",
			},
			effect: {
				ja: "対戦相手に賞品が1枚しか残っていない場合、この攻撃は20ダメージに加えて50ダメージを与え、防御ポケモンが混乱しています。",
			},
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
