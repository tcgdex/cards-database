import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キリンリキ",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "尻尾にも 小さな 頭がある。 背後から 近づく 敵がいると 本能的に 噛みついてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どっちもヘッド" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863603,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [203],
};

export default card;
