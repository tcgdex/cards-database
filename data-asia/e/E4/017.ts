import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "フレアロン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [136],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "自己癒し",
			},
			effect: {
				ja: "手からフレレオンに火のエネルギーカードを取り付けるときはいつでも、フレアロンに影響を与えるすべての特別な条件を削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "シング",
			},
			effect: {
				ja: "防御ポケモンは現在燃やされています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "燃焼ブースター",
			},
			effect: {
				ja: "この攻撃を使用するために、フレアロンに取り付けられたエネルギーカードを廃棄します。廃棄されたカードが火災エネルギーカードの場合、この攻撃は40ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
