import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ほほの 袋に エサを ため込み 何日も 見張りを 続ける。 尻尾で 仲間に 合図する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょうたつ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{ name: { ja: "かじる" }, damage: 10, cost: ["Colorless"] },
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
	dexId: [504],
	thirdParty: {
		cardmarket: 829510,
		tcgplayer: 636704,
	},
};

export default card;
