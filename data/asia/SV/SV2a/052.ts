import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャース",
		'zh-tw': "喵喵",
		'th-th': "เนียส",
		'id-id': "Meowth",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "昼間は 寝てばかりいる。 夜になると 目が 輝き 縄張りを 歩きまわる。",
		'zh-tw': "白天一直都在睡覺。到了晚上眼睛就會發光， 在自己的地盤徘徊。",
		'th-th': "ตอนกลางวันจะเอาแต่นอน พอตกกลางคืนจะเดินไปรอบ ๆ อาณาเขตของตนด้วยดวงตาที่เป็นประกาย",
		'id-id': "Yang dilakukan Meowth pada siang hari hanya tidur. Ketika malam tiba, mata Pokémon ini bercahaya dan ia berjalan mengelilingi wilayah teritorialnya.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "まねきねこ",
				'zh-tw': "招財貓",
				'th-th': "แมวกวัก",
				'id-id': "Kucing Pemanggil",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
				'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
				'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung.",
			},
		},
		{
			name: {
				'ja-jp': "ツメをたてる",
				'zh-tw': "豎爪",
				'th-th': "กางกรงเล็บ",
				'id-id': "Memasang Cakar",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719494,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837321,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837322,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [52],
};

export default card;
