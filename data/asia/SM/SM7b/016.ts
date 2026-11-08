import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤミラミ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "宝石の 瞳が 怪しく 輝くとき 人の 魂を 奪うと 恐れられる ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ファストハント" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札にある好きなカードを１枚、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "のろいのしずく" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "ダメカン3個を、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558841,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [302],
};

export default card;
