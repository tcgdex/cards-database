import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラントン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [171],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "水力発電",
			},
			effect: {
				'ja-jp': "Lanturnに付着した水エネルギーごとにFloodlightに10回のダメージを与えるが、Floodlightのエネルギーコストの支払いには使用されない場合があります。 Lanturnが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'ja-jp': "投光照明",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
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
