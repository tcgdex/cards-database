import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのニネタール",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [38],
	hp: 60,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "癒しの火",
			},
			effect: {
				ja: "手からブレインのニネタールにファイアエネルギーカードを取り付けるときはいつでも、存在する場合は1つのダメージカウンターを削除します。このパワーは、ブレインのニネタールが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "燃え尽きます",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合は、ブレインのニネタールに取り付けられたすべてのファイアエネルギーカードを捨ててください。",
			},
			damage: 50,
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
