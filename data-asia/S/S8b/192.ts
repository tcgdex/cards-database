import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モスノウ",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "野山を 荒らすものには 容赦 しない。 冷たいはねで 飛びまわり 吹雪を 起こして 懲らしめる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひょうせつのまい" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から[水]エネルギーを1枚選び、ベンチの[水]ポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オーロラビーム" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586931,
				tcgplayer: 571444,
			},
		},
	],

	evolveFrom: {
		ja: "ユキハミ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [873],
};

export default card;
