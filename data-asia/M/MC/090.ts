import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャロップ",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "いちばん 脚が 速い ものが リーダー。 群れが 行く 場所や 走る 速度を 決めている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いそぎあし" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおのたてがみ" },
			damage: 60,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863384,
			},
		},
	],

	evolveFrom: {
		ja: "ポニータ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [78],
};

export default card;
