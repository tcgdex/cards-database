import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠",
		th: "ซูแบท",
		id: "Zubat",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。",
		'zh-tw': "棲息在陽光照射不到的洞窟裡。到了早上就會和夥伴相聚， 一邊互相取暖一邊睡覺。",
		th: "อาศัยอยู่ในถ้ำที่แสงแดดส่องไม่ถึง เมื่อถึงเวลาเช้าจะรวมกลุ่มกับพวกพ้องเพื่อสร้างความอบอุ่นแก่ร่างกายและนอนหลับ",
		id: "Zubat tinggal di gua yang tidak terkena sinar matahari. Ketika pagi tiba, Pokémon ini berkumpul dengan sesamanya dan tidur sambil saling menghangatkan tubuh.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "まるみえエコー",
				'zh-tw': "全景迴響",
				th: "คลื่นเสียงสะท้อนหมดเปลือก",
				id: "Gema Melihat Jelas",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手の手札を見る。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看對手的手牌。",
				th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ดบนมือฝ่ายตรงข้าม",
				id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Lihat Kartu Pegangan lawan.",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
				th: "กัดติด",
				id: "Menggigit",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719483,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837299,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837300,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [41],
};

export default card;
