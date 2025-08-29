import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "BlaineのVulpix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "自然の癒し",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、BlaineのVulpixから1つのダメージカウンターを削除できます。 BlaineのVulpixが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "テールファン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
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
