import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラのキュウコン",
	},
	illustrator: "Ken Sugimori",

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
				'ja-jp': "癒しの火",
			},
			effect: {
				'ja-jp': "手からブレインのニネタールにファイアエネルギーカードを取り付けるときはいつでも、存在する場合は1つのダメージカウンターを削除します。このパワーは、ブレインのニネタールが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "燃え尽きます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合は、ブレインのニネタールに取り付けられたすべてのファイアエネルギーカードを捨ててください。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575345
			},
		},
	],
};

export default card
