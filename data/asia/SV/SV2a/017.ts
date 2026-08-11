import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピジョン",
		'zh-tw': "比比鳥",
		'th-th': "พีเจียน",
		'id-id': "Pidgeotto",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "広い 縄張りを 持っており 侵入する 邪魔者は 徹底的に つつかれてしまう。",
		'zh-tw': "擁有著廣闊的地盤。 要是有哪個討厭鬼膽敢入侵， 就會遭到牠的瘋狂啄擊。",
		'th-th': "มีอาณาเขตกว้างขวาง ผู้ที่บุกรุกเข้ามาในอาณาเขตจะถูกไล่จิกจนพรุน",
		'id-id': "Pidgeotto memiliki wilayah teritorial yang luas. Pokémon ini mematuk secara menyeluruh penyusup yang memasuki wilayah teritorialnya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "はばたく",
				'zh-tw': "羽擊",
				'th-th': "ตีปีก",
				'id-id': "Mengepak",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719459,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837256,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837257,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ポッポ",
	},

	retreat: 0,
	regulationMark: "G",
	rarity: "Common",
	dexId: [17],
};

export default card;
