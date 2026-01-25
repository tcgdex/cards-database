import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ローブシン",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "コンクリートを 作る 技術は ２０００年前に ローブシンから 教わったと 考えられている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マスターアーツ" },
			effect: {
				ja: "このポケモンについているエネルギー1個につき、このポケモンの最大HPは「＋40」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふりまわす" },
			damage: "100+",
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: { ja: "コインを2回投げ、オモテの数×50ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ドテッコツ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [534],

	thirdParty: {
		cardmarket: 829379,
		tcgplayer: 636487,
	},
};

export default card;
