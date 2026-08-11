import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤバチャ",
		'zh-tw': "妮莫",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "寂しく 死んだ者の 魂が 飲み残しの 紅茶に 取り憑いた。 ホテルや 民家に 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さめたおちゃ" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705379,
				tcgplayer: 587810,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [854],
};

export default card;
