import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Omastar",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [139],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "古代の牙",
			},
			effect: {
				'ja-jp': "Kabuto、Kabutops、またはKabutopsがプレイしている限り、Omastarの攻撃は、防御するPokã©Monに20のダメージを与えます（脱力感と抵抗を適用する前に）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ドラッグします",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ハイドロスプラッシュ",
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

export default card
