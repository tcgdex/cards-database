import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "クリムガン",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "あなぐらに 棲む。 体が 冷えると 動けなくなるので 日光浴は 欠かさない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきずりだす" },
			cost: ["Fire", "Water"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。",
			},
		},
		{
			name: { ja: "ツメできりさく" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899952,
				tcgplayer: 709202,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [621],
};

export default card;
