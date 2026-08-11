import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨーテリー",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "強い 相手にも 勇敢に 立ち向かうが 不利な 戦いを 避ける 知能の 高い ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゃれつく" },
			damage: "10+",
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、20ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [506],
	thirdParty: {
		cardmarket: 829512,
		tcgplayer: 636706,
	},
};

export default card;
