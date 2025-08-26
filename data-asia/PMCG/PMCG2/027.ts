import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "マイムさん",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [122],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "目に見えない壁",
			},
			effect: {
				ja: "攻撃が<em>（あなた自身を含む）</em>は、Mime <em>（脱力感と抵抗を適用した後）</em>に30以上のダメージを与えるときは、その損傷を防ぎます。 <em>（攻撃の他の効果はまだ発生します。）</em>このパワーは、Mime氏が眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "瞑想します",
			},
			effect: {
				ja: "ディフェンディングポケモンの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
