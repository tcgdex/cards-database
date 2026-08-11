import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・レヒレ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Fairy"],

	description: {
		ja: "水を 操る ポニの 守り神。 けがれを 払う 清らかな 水を 生みだすと 伝えられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドリームアウェイ" },
			cost: ["Fairy", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "ワンダーシャイン" },
			damage: 100,
			cost: ["Fairy", "Fairy", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558865,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [788],
};

export default card;
