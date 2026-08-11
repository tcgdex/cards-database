import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オコリザル",
		'zh-tw': "火爆猴",
		'th-th': "โอโคริซารุ",
		'id-id': "Primeape",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "だれかの 視線を 感じただけで 猛烈に 怒りだす。 そして 目が合った ものを 追いかけるのだ。",
		'zh-tw': "光是感覺到他方的視線都會暴怒起來，然後去追 和牠對到眼的傢伙。",
		'th-th': "แค่รู้สึกว่ามีใครมองก็โกรธเคืองรุนแรง แล้วไล่ล่าสิ่งที่สบตาด้วย",
		'id-id': "Primeape akan mengamuk besar ketika merasakan ada yang melihatnya. Lalu, ia akan mengejar siapa pun yang bertemu mata dengannya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "がなりたてる",
				'zh-tw': "狂嗥",
				'th-th': "เอ็ดตะโร",
				'id-id': "Berteriak-teriak",
			},
			damage: 40,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "このポケモンをこんらんにする。",
				'zh-tw': "將這隻寶可夢【混亂】。",
				'th-th': "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
				'id-id': "Ubah kondisi Pokémon ini menjadi Pusing.",
			},
		},
		{
			name: {
				'ja-jp': "げきこうスマッシュ",
				'zh-tw': "盛怒粉碎",
				'th-th': "เดือดจัดซัดแหลก",
				'id-id': "Smes Geram",
			},
			damage: 150,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンがこんらんでないなら、このワザは失敗。",
				'zh-tw': "若這隻寶可夢沒有【混亂】，則這個招式失敗。",
				'th-th': "ถ้าโปเกมอนนี้ไม่เป็นสภาวะ[สับสน] ท่าต่อสู้นี้จะล้มเหลว",
				'id-id': "Jika Pokémon ini tidak mengalami kondisi Pusing, serangan ini gagal.",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719499,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837331,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837332,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マンキー",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [57],
};

export default card;
