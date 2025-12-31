import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "電極",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [101],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "プラズマ",
			},
			effect: {
				ja: "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つを電極に取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "この攻撃は、各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）電極はそれ自体に100の損傷を与えます。",
			},
			damage: 100,
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
			stamps: ["1st Edition"],
		},
	],
};

export default card
