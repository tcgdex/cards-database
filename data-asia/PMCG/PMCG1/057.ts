import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "マチャンプ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ストライクバック",
			},
			effect: {
				ja: "対戦相手の攻撃がMachamp <em>に損害を与えるたびに（Machampがノックアウトされたとしても）</em> </em>、このパワーは攻撃ポクモンに10ダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em>相手が攻撃するときにMachampが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				ja: "地震のトス",
			},
			damage: 60,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
