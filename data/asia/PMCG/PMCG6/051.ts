import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメのスリーパー",
	},
	illustrator: "Ken Sugimori",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [97],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "活気があります",
			},
			effect: {
				'ja-jp': "任意のプレイヤーの破棄パイルで1つの基本的なポケモンを選択します。そのプレーヤーのベンチに置きます。そのポケモンの半分に等しいそのポケモンに多数のダメージカウンターを置きます（最も近い10に丸められます）。 （満杯のベンチにポケモンを置くことはできません。）",
			},
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "振り子の呪い",
			},
			effect: {
				'ja-jp': "防御ポケモンのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575388
			},
		},
	],
};

export default card
