import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バクガメス",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "爆薬で コーティングされた 甲羅を 背負う。 攻撃してきた 敵を 大爆発で 返り討ち。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はきだしショット" },
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ばくねつほう" },
			damage: 100,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863432,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [776],
};

export default card;
