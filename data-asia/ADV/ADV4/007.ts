import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フラッタートリック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の手を見て、1枚のカードを選択してください。あなたの対戦相手はあなたが選んだカードを破棄します。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "トリプルポイズン",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。ターン間の防御ポケモンに1つではなく3つのダメージカウンターを入れます。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
