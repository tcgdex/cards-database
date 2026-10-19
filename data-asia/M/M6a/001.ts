import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
		id: "Exeggcute",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。",
		id: "Karena saling mengirimkan telepati yang hanya diterima oleh Exeggcute, Pokémon ini selalu terkumpul 6 ekor pada saat apa pun.",
	},

	stage: "Basic",

	attacks: [
		{
			name: { 
				ja: "さいみんじゅつ" , 
				id: "Hipnotis",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908179,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [102],
};

export default card;
