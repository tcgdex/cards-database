import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "カンガスハン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [115],
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フェッチ",
			},
			effect: {
				ja: "カードを描きます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ワンツーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
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
