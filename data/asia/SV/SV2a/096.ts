import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘",
		th: "สลีป",
		id: "Drowzee",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "食べた夢は 全部 覚えている。 子どもの 夢のほうが 美味しいので めったに 大人の 夢は食べない。",
		'zh-tw': "能記住所有自己吃下的夢。由於小孩的夢更加美味， 因此幾乎不吃大人的夢。",
		th: "จำฝันที่กินเข้าไปได้หมด ไม่ค่อยกินฝันของผู้ใหญ่เพราะฝันของเด็กอร่อยกว่า",
		id: "Drowzee mengingat semua mimpi yang dimakannya. Pokémon ini jarang memakan mimpi orang dewasa karena mimpi anak-anak rasanya lebih lezat.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "しねんのずつき",
				'zh-tw': "意念頭錘",
				th: "ท่าโขกหัวพลังจิต",
				id: "Sundulan Spiritual",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719549,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837420,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837421,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [96],
};

export default card;
