import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲキッス",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Fairy"],

	description: {
		ja: "争いのない 平和な 土地に トゲキッスは 訪れ さまざまな 恵みを 分け与えると 言われる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ようせいのうたげ" },
			effect: {
				ja: "自分の番に1回使える。自分の[妖]ポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 70,
			cost: ["Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558223,
			},
		},
	],

	evolveFrom: {
		ja: "トゲチック",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [468],
};

export default card;
