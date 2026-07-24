import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "メルメタル",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "鉄を 産み出す 力を 持つと 崇められていた。 ３０００年の 時を 経て なぜか 蘇った。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "メタルイーター" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある[鋼]ポケモンを1枚トラッシュする。その後、このポケモンのHPを「100」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヘビーインパクト" },
			damage: 130,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558156,
			},
		},
	],

	evolveFrom: {
		ja: "メルタン",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [809],
};

export default card;
