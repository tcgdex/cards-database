import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ムシャーナ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "おでこから 出ている 煙の 中には 人や ポケモンの 見た 夢が たくさん つまっているのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドリームコール" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「マコモ」を好きなだけ選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ねむりのはどう" },
			damage: 50,
			cost: ["Psychic"],
			effect: { ja: "相手のバトルポケモンをねむりにする。" },
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ムンナ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [518],
};

export default card;
