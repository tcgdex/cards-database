import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "尻からも 口からも 糸をだす。 糸で 獲物を 絡め取り ゆっくりと 体液を すする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくへんげ" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数x50ダメージ追加。",
			},
		},
		{
			name: { ja: "スパイダートラップ" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくとねむりにする。のぞむなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをどくとねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559156,
			},
		},
	],

	evolveFrom: {
		ja: "イトマル",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [168],
};

export default card;
