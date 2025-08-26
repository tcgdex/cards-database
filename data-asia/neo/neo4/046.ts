import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いアンファロ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "導電率",
			},
			effect: {
				ja: "相手が手からエネルギーカードをポクモンに取り付けるたびに、このパワーはそのポクモンに10ダメージを与えます。 <em>（弱さと抵抗を適用しないでください。）</em>このパワーは、プレイに複数の暗いアンファロがある場合、または暗いアンファロが眠っている、混乱し、麻痺している場合に動作します。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "ショックボルト",
			},
			effect: {
				ja: "暗いアンファロに取り付けられたすべての稲妻エネルギーカードを廃棄するか、この攻撃は何もしません。",
			},
			damage: 50,
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
