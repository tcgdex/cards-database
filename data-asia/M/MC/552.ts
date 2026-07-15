import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドン",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Dragon"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アクセルピーク" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分の「未来」のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "スパーキングアタック" },
			damage: 160,
			cost: ["Lightning", "Lightning", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863854,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1008],
};

export default card;
