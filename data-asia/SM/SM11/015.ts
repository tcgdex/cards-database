import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "バスラオ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "乱暴かつ 獰猛な ポケモン。 赤と 青の バスラオは 縄張りを 巡って いつも ケンカしている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むれでむさぼる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹に、自分の場の「バスラオ」の数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556974,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [550],
};

export default card;
