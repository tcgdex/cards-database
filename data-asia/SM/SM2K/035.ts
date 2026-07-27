import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "愛くるしい 仕草と 姿で 老若男女 問わずに 人気だが その数は 少ない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビンタ" },
			damage: 10,
			cost: ["Fairy"],
		},
		{
			name: { ja: "このゆびとまれ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561501,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [35],
};

export default card;
