import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "リグレー",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーを 操る。 サイコパワーで 相手の 脳みそを 絞めつけて 頭痛を 起こさせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとずらす" },
			cost: ["Psychic"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーを1個選び、相手の別のポケモンにつけ替える。",
			},
		},
		{
			name: { ja: "ビーム" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
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

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [605],
};

export default card;
