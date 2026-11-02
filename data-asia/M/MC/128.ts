import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "オスの たてがみは 戦いになると 摂氏２０００度の 高温になる。 近寄るだけで 大火傷だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのたてがみ" },
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "フレイムタックル" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863424,
			},
		},
	],

	evolveFrom: {
		ja: "シシコ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [668],
};

export default card;
