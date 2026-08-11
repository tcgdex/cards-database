import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウスVSTAR",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スターバース" },
			effect: {
				ja: "自分の番に使える。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "トリニティノヴァ" },
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687824,
				tcgplayer: 571792,
			},
		},
	],

	evolveFrom: {
		ja: "アルセウスV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Secret Rare",
	dexId: [493],
};

export default card;
