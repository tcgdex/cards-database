import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ブイサーチ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「ポケモンV」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ふむ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586948,
				tcgplayer: 571462,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Rare",
	dexId: [133],
};

export default card;
