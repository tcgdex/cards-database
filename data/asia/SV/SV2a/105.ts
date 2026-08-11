import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガラガラ",
		'zh-tw': "嘎啦嘎啦",
		'th-th': "การะการะ",
		'id-id': "Marowak",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "進化して 被っていた 母親の 骨が 一体化して そのうえ 凶暴な 性格に 変わった。",
		'zh-tw': "進化時，原本戴在頭上的母親頭骨化為了牠身體的一部份。 不但如此，性格也變得很凶暴。",
		'th-th': "วิวัฒนาการแล้วทำให้กระดูกของแม่ที่สวมอยู่นั้นกลายเป็นส่วนหนึ่งของตน ยิ่งไปกว่านั้น ยังเปลี่ยนให้มีนิสัยดุดันด้วย",
		'id-id': "Cubone berevolusi menjadi Marowak dan tengkorak ibunya yang dikenakan di kepalanya menyatu ke tubuhnya. Selain itu, sifatnya juga berubah menjadi brutal.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ボーンスロー",
				'zh-tw': "骨棒投擲",
				'th-th': "โบนโทรว์",
				'id-id': "Bone Throw",
			},
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
				'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				'id-id': "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			},
		},
		{
			name: {
				'ja-jp': "そこぢから",
				'zh-tw': "潛力",
				'th-th': "พลังแฝง",
				'id-id': "Kekuatan Laten",
			},
			damage: 120,
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
				'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719558,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837438,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837439,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カラカラ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [105],
};

export default card;
