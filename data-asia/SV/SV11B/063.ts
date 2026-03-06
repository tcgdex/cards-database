import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "バルチャイ",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "翼が 小さいため 飛べない。 進化の ときが 近づくと 自分から ガイコツを 脱ぎ捨てる。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "やんちゃげり" }, damage: 10, cost: ["Colorless"] },
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [629],

	thirdParty: {
		cardmarket: 828586,
		tcgplayer: 636417,
	},
};

export default card;
