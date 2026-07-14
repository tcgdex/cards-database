import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		// Giovanni's Nidoran ♂
		ja: "ジョバンニのニドラン♂",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [32],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダブルキック",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "報復",
			},
			effect: {
				ja: "GiovanniのNidoran Mに2つ以上のダメージカウンターがある場合を除き、この攻撃を使用することはできません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575310
			},
		},
	],
};

export default card
