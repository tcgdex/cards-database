import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いクロバット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "サプライズバイト",
			},
			effect: {
				ja: "あなたがあなたの手から暗いクロバットを演奏するとき、あなたはあなたの対戦相手のポクモンの1つを選択するかもしれません。このパワーは、そのポクモンに20のダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "暗い排水",
			},
			effect: {
				ja: "相手のポケモンごとにコインをひっくり返します。各ヘッドについて、この攻撃はそのポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。 Dark Crobatから多くのダメージカウンターを削除します。 Dark Crobatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
