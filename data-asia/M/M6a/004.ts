import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イルミーゼ",
		id: "Illumise"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "バルビートを 誘導して 夜空に サインを 描く。 サインの 意味を 研究する 学者も いる。",
		id: "Illumise mengarahkan Volbeat untuk menggambar tanda di langit malam. Ada juga cendikiawan yang meneliti arti tanda tersebut."
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { 
				ja: "ばつぐんフェロモン",
				id: "Feromon Super Efektif"
			},
			effect: {
				ja: "自分の場に「バルビート」がいるなら、はたらく。このポケモンがいるかぎり、おたがいのバトルポケモンの弱点は「×3」で計算する。",
				id: "Berjalan jika ada Volbeat di Arena sendiri. Selama Pokémon ini ada di Arena, perhitungan kerusakan dari tipe yang menjadi Kelemahan Pokémon Bertarung kedua pemain adalah 3 kali lipat."
			},
		},
	],

	attacks: [
		{
			name: { 
				ja: "ぶつかる",
				id: "Menyeruduk"
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908182,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [314],
};

export default card;
