import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "フワライド",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "夕暮れに 飛ぶ フワライドの 大群は じっと 観察して いても いつのまにか 消えている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダメージはこび" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモン全員にのっているダメカンをそれぞれ4個、相手のバトルポケモンにのせ替える。",
			},
		},
		{
			name: { ja: "ウィールウインド" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559837,
			},
		},
	],

	evolveFrom: {
		ja: "フワンテ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [426],
};

export default card;
