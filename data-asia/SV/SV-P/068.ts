import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィア",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "晴れた 日に 寝ている リーフィアは 光合成をして きれいな 空気を 作り出しているのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アロマウインド" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンの特殊状態を、すべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708483,
				tcgplayer: 587826,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [470],
};

export default card;
