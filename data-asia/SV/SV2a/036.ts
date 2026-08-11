import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー",
		'zh-tw': "皮可西",
		th: "ปิคซี",
		id: "Clefable",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "１キロ先に 落ちた 針の 音も 聞こえるほど 耳が いいので ふだんは 静かな ところに いる。",
		'zh-tw': "聽覺靈敏，連１公里以外針落地的聲音都聽得見， 因此平時會待在安靜的地方。",
		th: "หูดีถึงขนาดได้ยินเสียงเข็มที่ตกอยู่ระยะ 1 กิโลเมตรข้างหน้า โดยปกติจึงอยู่ในสถานที่เงียบ ๆ",
		id: "Telinga Clefable sangat tajam dan dapat mendengar suara jarum jatuh di tempat berjarak 1 km darinya, sehingga Pokémon ini biasanya berada di tempat yang tenang.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "このゆびとまれ",
				'zh-tw': "看我嘛",
				th: "ตามฉันมา",
				id: "Ikuti Aku",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
				'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
				th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
				id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung.",
			},
		},
		{
			name: {
				ja: "アディショナルムーン",
				'zh-tw': "追加月亮",
				th: "แอดดิชันนัลมูน",
				id: "Additional Moon",
			},
			damage: 50,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
				'zh-tw': "若對手的寶可夢因這個招式的傷害而【昏厥】了，則多獲得1張獎賞卡。",
				th: "ถ้าโปเกมอนฝ่ายตรงข้าม[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้นี้แล้ว หยิบการ์ดรางวัลเพิ่ม 1 ใบ",
				id: "Jika Pokémon lawan KO karena kerusakan akibat serangan ini, ambil Kartu Point 1 lembar lebih banyak.",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719478,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837293,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837294,
			},
		},
	],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [36],
};

export default card;
