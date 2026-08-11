import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジラーチ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ねがいぼし" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から5枚見る。その中にあるトレーナーズを1枚、相手に見せてから、手札に加える。残りのカードは山札にもどして切る。その後、このポケモンをねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ビンタ" },
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558608,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [385],
};

export default card;
