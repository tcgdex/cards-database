import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ザルード",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "群れを つくり 密林で 暮らす。 とても 攻撃的で 森にすむ ポケモンたちから 恐れられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うしろなげ" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "シャドーウィップ" },
			damage: "100+",
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "自分のベンチポケモンに「シャドー[D]エネルギー」がついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888310,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [893],
};

export default card;
