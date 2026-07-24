import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイバラ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "ある 探検記で テツノイバラと 紹介されている 物体と 一致する 特徴が ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デスタプレッサー" },
			damage: "70×",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の山札を上から5枚オモテにして、その中にある「未来」のカードの枚数×70ダメージ。オモテにした「未来」のカードはトラッシュし、残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "メガトンラリアット" },
			damage: 140,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863577,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [995],
};

export default card;
