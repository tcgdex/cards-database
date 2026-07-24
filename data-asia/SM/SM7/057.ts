import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ジラーチ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ほしにねがいを" },
			effect: {
				ja: "自分の番に、ウラになっている自分のサイドからこのカードをとったとき、自分のベンチに空きがあるなら、手札に加える前に使える。このポケモンを自分のベンチに出し、さらにサイドを1枚とる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほろびのゆめ" },
			damage: 10,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをねむりにする。次の相手の番の終わりに、このワザを受けた相手のポケモンはきぜつする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559018,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [385],
};

export default card;
