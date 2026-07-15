import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ライボルト",
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "人前には めったに 姿を 見せない。 雷の 落ちた 場所に すみかが あると いう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エレキック" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "フラッシュインパクト" },
			damage: 120,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン1匹にも、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863539,
			},
		},
	],

	evolveFrom: {
		ja: "ラクライ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [310],
};

export default card;
