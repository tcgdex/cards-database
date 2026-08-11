import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブリッシー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [242],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "ソフトボイルド",
			},
			effect: {
				'ja-jp': "手からブリッシーをプレイすると、コインをひっくり返すことができます。頭の場合は、Blisseyから8つのダメージカウンターを削除します。尾の場合、Blisseyから4つのダメージカウンターを削除します。いずれにせよ、Blisseyのダメージカウンターがそれよりも少ない場合、それらすべてを削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ボディスラム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
