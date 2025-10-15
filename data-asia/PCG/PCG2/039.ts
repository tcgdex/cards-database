import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ソロック",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [338],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "サンビーム",
			},
			effect: {
				ja: "プレイ中の各ルナトンの最大HPは80です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "焦げた光",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御するポケモンが燃やされます。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "反射ビーム",
			},
			effect: {
				ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、プレイ中のルナトンごとにそのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
