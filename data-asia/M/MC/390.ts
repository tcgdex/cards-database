import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ローブシン",
	},

	illustrator: "Shinya Mizuno",
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
				ja: "このポケモンについている[F]エネルギー1個につき、このポケモンの最大HPは「＋40」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふりまわす" },
			damage: "100+",
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863692,
			},
		},
	],

	evolveFrom: {
		ja: "ドテッコツ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [534],
};

export default card;
