import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "マチャンプ",
	},


	category: "Pokemon",
	dexId: [68],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "熱心",
			},
			effect: {
				ja: "対戦相手がPokã©Mon-Exをプレイしている場合、Machampのそれぞれの攻撃は、防御するPokã©Monに30回以上のダメージを与えます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "ブリックスマッシュ",
			},
			effect: {
				ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "クロスチョップ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は60のダメージに加えて30ダメージを与えます。",
			},
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
