import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "チルット",
		'zh-tw': "青綿鳥",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "真綿の ような 翼の 手入れは 絶対に 欠かさない。汚れると 水浴びをして きれいに 洗う。",
		'zh-tw': "從不疏於打理絲綿般的翅膀。一弄髒就會到水裡洗乾淨。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふいをつく",
				'zh-tw': "偷襲",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687766,
				tcgplayer: 571740,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Illustration rare",
	dexId: [333],
};

export default card;
