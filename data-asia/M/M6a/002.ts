import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ナッシー",
		id: "Alolan Exeggcutor"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "伸び伸び 育って サイコパワーは いらなくなり 眠れる ドラゴンの 力が 覚醒 したのだ。",
		id: "Ketika ia tumbuh meninggi, kekuatan psikokinesisnya menjadi tidak diperlukan dan kekuatan naga yang terpendam bangkit."
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { 
				ja: "スケールアップ",
				id: "Scale Up"
			},
			effect: {
				ja: "このポケモンに[G]エネルギーが6個以上ついているなら、このポケモンは最大HPが「＋250」される。",
				id: "Jika Pokémon ini mengenakan 6 Energi Daun atau lebih, HP maksimal Pokémon ini bertambah sejumlah 250"
			},
		},
	],

	attacks: [
		{
			name: { 
				ja: "メガドレイン" ,
				id: "Mega Drain"
			},
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「50」回復する。",
				id: "Pulihkan HP Pokémon ini sejumlah 50."
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908180,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "None",
	dexId: [103],
};

export default card;
