import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "アルタリア",
	},


	category: "Pokemon",
	dexId: [334],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "相乗効果",
			},
			effect: {
				ja: "72が再生中の場合は、ターンの間にAltariaから1つのダメージカウンターを取り外します。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "驚き",
			},
			effect: {
				ja: "見ずに相手の手から1枚のカードを1枚選択します。あなたが選んだカードを見てから、相手にそのカードを彼または彼女のデッキにシャッフルさせます。",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "突風",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
