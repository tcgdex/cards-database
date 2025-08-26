import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いカダブラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 50,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "物質交換",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em>中に、手からカードを捨てることができます。もしそうなら、カードを描きます。このポケモンが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "マインドショック",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
			damage: 30,
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
