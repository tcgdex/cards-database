import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "電極",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "チェーンライトニング",
			},
			effect: {
				ja: "防御ポケモンが無色でない場合、この攻撃は、防御ポケモン（あなた自身を含む）と同じタイプの各ベンチポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
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
