import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのイビサウルス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [2],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "リラックスした香り",
			},
			effect: {
				ja: "エリカのイビサウルスがあなたのアクティブなポクモンである限り、攻撃が<em>（あなた自身でさえ）</em>がポクモン<em>にダメージを与えるときはいつでも（衰弱と抵抗を適用した後）</em> </em>、その攻撃はそのポクモンのダメージの半分のみを行います（最寄りの10まで丸められます）。 <em>（攻撃の他の効果はまだ発生します。）</em>このパワーは機能しなくなり、エリカのイビサウルスは眠り、混乱し、麻痺しています。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "ダブルレザーの葉",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
