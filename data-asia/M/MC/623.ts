import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのアオガラス",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "頭が 良く くちばしと 足で 扱える 道具なら 簡単に 使い方を 覚えてしまうぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スピードひこう" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "するどいはね" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863925,
			},
		},
	],

	evolveFrom: {
		ja: "ホップのココガラ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [822],
};

export default card;
