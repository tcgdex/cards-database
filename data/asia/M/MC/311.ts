import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "テレパシーで 気持ちを 通わせる。 光を 屈折させる 羽毛で 体を 包み 姿を 消す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきつける" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ラグーンフライト" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863613,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [380],
};

export default card;
