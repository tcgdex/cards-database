import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "スノークラウドキャストフォーム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [351],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "気質の天気",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、キャストフォーム、雨のキャストフォーム、またはサニーキャストフォームを検索し、Snow-Cloud Castformで切り替えることができます。 （Snow-Cloud Castform、ダメージカウンター、特別な条件、およびそれに対する影響に取り付けられたカードは、現在、新しいPokã©Mon。にあります。）シャッフルスノークラウドキャストフォームはデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ホロンブリザード",
			},
			effect: {
				ja: "Snow-Cloud CastformにHolon Energy Cardsが取り付けられている場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
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
			stamp: ["1st edition"],
		},
	],
};

export default card
