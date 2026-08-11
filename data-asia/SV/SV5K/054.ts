import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ホーホー",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "いつも 一本足で 立っている。 脚を 入れ替える 瞬間は 素早くて なかなか 見られない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイレントウイング" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752835,
				tcgplayer: 568388,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [163],
};

export default card;
