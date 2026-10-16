import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "バルビート",
		id: "Volbeat"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "お尻の 光を 点滅させて 仲間と 会話する。 イルミーゼの 出す 甘い 香りが 大好き。",
		id: "Volbeat mengedipkan cahaya di posteriornya untuk berkomunikasi dengan sesamanya. Ia sangat menyukai aroma manis yang dikeluarkan Illumise."
	},

	stage: "Basic",

	attacks: [
		{
			name: { 
				ja: "さそうひかり" ,
				id: "Cahaya Mengundang"
			},
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
				id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
			},
		},
		{
			name: { 
				ja: "むしのさざめき",
				id: "Dengungan Serangga"
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908181,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [313],
};

export default card;
