import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "ゆらゆら 揺れて リラックス。 こうして 高まった サイコパワーを 敵に 目掛けて 放射するぞ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バイタルダンス" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札にある基本エネルギーを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふらっとビンタ" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560074,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [741],
};

export default card;
