import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラベトベトンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ケミカルブレス" },
			damage: "10+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数x70ダメージ追加。",
			},
		},
		{
			name: { ja: "かみくだく" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "トライハザードGX" },
			cost: [],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをどくとやけどとマヒにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561118,
			},
		},
	],

	evolveFrom: {
		ja: "アローラベトベター",
	},

	retreat: 4,
	rarity: "Ultra Rare",
	dexId: [89],

	suffix: "GX",
};

export default card;
