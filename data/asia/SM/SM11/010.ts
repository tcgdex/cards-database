import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "モロバレル",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "モンスターボールの カサを 見せつけ 獲物を 誘き寄せようとするが だまされる ポケモンは 少ない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぼうはつほうし" },
			effect: {
				ja: "自分の番に、自分の手札からワザ「キノコのほうし」を持つポケモンを場に出すたび、1回使える。相手のバトルポケモンをどくとねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556969,
			},
		},
	],

	evolveFrom: {
		ja: "タマゲタケ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [591],
};

export default card;
