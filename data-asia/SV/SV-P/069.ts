import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシア",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "体温を 自在に コントロールし 大気の 水分を 凍らせて ダイヤモンドダストを 巻き起こす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こごえるかぜ" },
			damage: 60,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708484,
				tcgplayer: 587827,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [471],
};

export default card;
