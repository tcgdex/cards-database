import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テンタクルエル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [73],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "反応シールド",
			},
			effect: {
				'ja-jp': "TentacruelにReact Energy Cardsが取り付けられている限り、対戦相手のPokã©Mon-Exからの攻撃によってプレイ中のTentacruelのいずれかに対して行われたダメージを含むすべての効果を防​​ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "水の矢",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "フューリーストライク",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],


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
