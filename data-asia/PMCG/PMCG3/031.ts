import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ジェンガー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "呪い",
			},
			effect: {
				ja: "ターン中（攻撃の前）</em> </em>、1人のダメージカウンターを対戦相手のポクモンの1人から別の<em>に移動できます（他のポクモンをノックアウトしたとしても）</em>。 Gengarが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "暗い心",
			},
			effect: {
				ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
