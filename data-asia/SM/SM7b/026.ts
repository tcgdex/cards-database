import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "プリン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "１２オクターブを 超える 声域を 持つが 歌が 上手いか どうかは それぞれの プリンの 努力次第。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 10,
			cost: ["Fairy"],
		},
		{
			name: { ja: "うたう" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558851,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [39],
};

export default card;
