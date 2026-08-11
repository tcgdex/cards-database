import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "カブト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [140],
	hp: 50,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "友達を復活させます",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭がある場合は、カブトという名前のカードをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。新しいカブトを基本的なポクモンとして扱ってください。 Kabutoが眠っている、混乱し、麻痺した<em>（またはベンチがいっぱいの場合）</em>である場合、このパワーは使用できません</em>。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "一緒に働きます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて、それぞれのオマーニテ、オマスター、カブト、カブトップス、アエロダクチルごとに10ダメージを与えます。",
			},
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
