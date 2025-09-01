import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネトン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "跳ね返ります",
			},
			effect: {
				ja: "Magnetonと防御ポケモンにエネルギーカードの数が同じ数字が付いていない場合、プレーヤーは、アクティブな数のエネルギーカードを取り付けてアクティブなポケモンを制御し、ベンチポケモンをアクティブポケモンに切り替えます。",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				ja: "磁波",
			},
			effect: {
				ja: "この攻撃は、30のダメージを加えて、ベンチ付きポケモンの数を10回ダメージして、相手のベンチポケモンの数を差し引いています。 （たとえば、対戦相手が1つのベンチポケモンを持っていて、3つのベンチがある場合、この攻撃は30のダメージと20ダメージを与えます。）",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamps: ["1st Edition"],
		},
	],
};

export default card
