import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "デンチュラ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気を 帯びた 糸で ワナを 仕掛ける。 感電して 動けない 獲物を ゆっくりと いただくのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ビリビリワイヤー" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。このワザのダメージは、ベンチでも弱点・抵抗力を計算する。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556982,
			},
		},
	],

	evolveFrom: {
		ja: "バチュル",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [596],
};

export default card;
