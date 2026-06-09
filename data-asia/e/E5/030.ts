import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "articuno",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [144],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "水免疫",
			},
			effect: {
				ja: "手からarticunoに水エネルギーカードを取り付けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "固体を凍結します",
			},
			effect: {
				ja: "廃棄パイルに水エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをArticunoに取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "アイスサイクロン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。テールの場合、この攻撃は、プレイ中の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
