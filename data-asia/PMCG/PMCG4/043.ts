import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークディグトリオ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [51],
	hp: 50,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "陥没",
			},
			effect: {
				ja: "相手のアクティブなポクモンがリトリートするたびに、相手はコインをひっくり返します。尾の場合、このパワーはそのポクモンに20のダメージを与えます。 <em>（衰弱と抵抗を適用しないでください。）</em>このパワーは機能しなくなり、暗いDugtrioが眠っている、混乱し、麻痺しています。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "ノックダウン",
			},
			effect: {
				ja: "相手はコインをひっくり返します。テールの場合、この攻撃は20ダメージに加えて20ダメージを与えます。頭の場合、この攻撃は20ダメージを与えます。",
			},
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
