import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Walrein Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [365],
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "氷のオーラ",
			},
			effect: {
				'ja-jp': "Walrein ExがアクティブなPokã©Monである限り、WaterPokã©Monを除く、ターンの合間にアクティブなPokã©Mon（あなたと対戦相手の両方）に1つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "水の矢",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "アイススロー",
			},
			effect: {
				'ja-jp': "防御ポケモンが戦闘ポケモンである場合、この攻撃の基本ダメージは80ではなく120です。",
			},
			damage: 80,
		},
	],

	retreat: 3,

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
