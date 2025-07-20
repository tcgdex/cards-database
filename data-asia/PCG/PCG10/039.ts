import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "バネット",
	},


	category: "Pokemon",
	dexId: [354],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "grみ",
			},
			effect: {
				ja: "対戦相手が取った各賞カードに対して20のダメージと10件のダメージがさらに10件のダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "ベンチ操作",
			},
			effect: {
				ja: "対戦相手は、ベンチのポケモンの数に等しい多数のコインをひっくり返します。この攻撃は、尾の数の40回のダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
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
