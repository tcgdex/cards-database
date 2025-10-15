import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチミル",
	},

	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "催眠術で ポケモンや 人を 操る。 眠ったまま ゴチミルに 連れ去られる 昔話が 各地に 残っている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フォーチュンアイ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手の山札を上から5枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
		{
			name: { ja: "サイコショット" },
			damage: 40,
			cost: ["Psychic", "Colorless"],
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
		ja: "ゴチム",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [575],
};

export default card;
