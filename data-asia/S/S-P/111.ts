import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリムオンV",
		'zh-tw': "火伊布VMAX",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "まよいのはどう",
				'zh-tw': "極巨爆裂",
			},
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをこんらんにする。",
				'zh-tw': "將自己的牌庫上方5張卡丟棄，造成其中的能量卡的張數×100點傷害。",
			},
		},
		{
			name: { ja: "メンタルクラッシュ" },
			damage: "90+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがこんらんなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525240,
				tcgplayer: 597312,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [858],
};

export default card;
