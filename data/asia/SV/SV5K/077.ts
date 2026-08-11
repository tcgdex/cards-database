import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ジーランス",
		'zh-tw': "古空棘魚",
		th: "จีแลนซ์",
		ko: "시라칸",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。",
		'zh-tw': "如岩石般堅硬的鱗片以及裝滿了油脂的鰾囊， 讓牠能承受深海的水壓。",
		th: "ด้วยเกล็ดที่แข็งดั่งหินผาและถุงลมที่อัดแน่นไปด้วยไขมันจึงสามารถทนทานต่อแรงดันน้ำลึกได้",
		ko: "바위처럼 단단한 비늘과 기름으로 가득 찬 부레로 심해의 수압을 견딘다.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "きおくにもぐる",
				'zh-tw': "潛入記憶",
				th: "ซุกซ่อนในความทรงจำ",
				ko: "기억에 잠수하기",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有進化寶可夢，可使用進化前持有的所有招式。[需要有足夠使用招式的能量。]",
				th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราที่วิวัฒนาการแล้วทุกตัว สามารถใช้ท่าต่อสู้ที่มีก่อนวิวัฒนาการได้ทั้งหมด {จำเป็นต้องใช้พลังงานสำหรับใช้ท่าต่อสู้}",
				ko: "이 포켓몬이 있는 한, 자신의 진화한 포켓몬 전원은 진화 전에 가지고 있던 기술을 모두 사용할 수 있다. (기술을 사용하기 위한 에너지는 필요하다.)",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ひれカッター",
				'zh-tw': "鰭快刀",
				th: "ครีบใบมีด",
				ko: "지느러미 커터",
			},
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752858,
				tcgplayer: 568411,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [369],
};

export default card;
