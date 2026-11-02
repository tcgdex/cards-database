import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ボーマンダex",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "とどろくよびごえ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[N]ポケモンを3枚まで選び、ベンチに出す。",
			},
		},
		{
			name: { ja: "りゅうのはどう" },
			damage: 240,
			cost: ["Fire", "Water"],
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908311,
			},
		},
	],

	evolveFrom: {
		ja: "コモルー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [373],

	suffix: "EX",
};

export default card;
