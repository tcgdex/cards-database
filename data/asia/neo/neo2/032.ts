import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オマニテ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [138],
	hp: 50,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "化石を復活させます",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、神秘的な化石から進化するカードをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。そのカードを基本的なポクモンとして扱います。 Omanyteが眠っている、混乱している、または麻痺した<em>（またはベンチがいっぱいの場合）</em>である場合、このパワーは使用できません</em>。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "バインド",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
