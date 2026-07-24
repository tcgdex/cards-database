import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ミネズミ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ほほの 袋に エサを ためこみ 何日も 見張りを 続ける。 尻尾で 仲間に 合図する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちらみ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から1枚見て、もとにもどす。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561446,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [504],
};

export default card;
