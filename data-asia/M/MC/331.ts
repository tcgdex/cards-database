import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "無表情だが 内面では サイコパワーを 抑えこむのに 必死に なっているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みすかす" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。",
			},
		},
		{
			name: { ja: "サイコショット" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863633,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [677],
};

export default card;
