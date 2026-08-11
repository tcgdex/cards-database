import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
		'zh-tw': "蛋蛋",
		th: "ทามะทามะ",
		id: "Exeggcute",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "６匹で いないと 落ち着かない。 １匹でも いなくなると とたんに 逃げ腰に なるのだ。",
		'zh-tw': "非得湊齊６隻才會有安全感。那怕只是少了１隻，都會立刻 變得很膽小，隨時想要逃跑。",
		th: "ถ้าอยู่ไม่ครบทั้ง 6 ตัวจะรู้สึกไม่สงบใจ ถ้าหายไปแม้แต่ 1 ตัวจะเตรียมตัววิ่งหนีทันที",
		id: "Exeggcute tidak tenang jika tidak berenam. Begitu salah satu menghilang, Pokémon ini segera ingin melarikan diri.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たまころがり",
				'zh-tw': "滾球",
				th: "กลิ้งบอล",
				id: "Menggelindingkan Bola",
			},
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×30點傷害。",
				th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
				id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719555,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837432,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837433,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [102],
};

export default card;
