import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "キチキギス",
		id: "Fezandipiti",
		th: "คิจิคิกิสึ",
		'zh-tw': "吉雉雞",
		'zh-cn': "吉雉雞"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [1016],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "艶やかな 翼を 羽ばたかせて フェロモンを 振りまき 人や ポケモンを 蠱惑に 魅了する。",
		id: "Ia merebut hati dan memikat manusia serta Pokémon dengan mengepakkan sayapnya yang ayu dan menebarkan feromon.",
		th: "กระพือปีกที่แสนเย้ายวนเพื่อโปรยฟีโรโมนยั่วยวนคนและโปเกมอนให้หลงใหล",
		'zh-tw': "會拍動豔麗的翅膀散佈 費洛蒙，使人類和寶可夢 神魂顛倒，為牠著迷。",
		'zh-cn': "會拍動豔麗的翅膀散佈 費洛蒙，使人類和寶可夢 神魂顛倒，為牠著迷。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナフェロモン",
			id: "Adrenaline Pheromone",
			th: "อะดรีนาลีนฟีโรโมน",
			'zh-tw': "腎上腺費洛蒙",
			'zh-cn': "腎上腺費洛蒙"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			id: "Jika Pokémon ini mengenakan Energi {Kegelapan}, saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut.",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[ความมืด]ติดอยู่ เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่ได้รับแดเมจนั้น",
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
			'zh-cn': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "エナジーフェザー",
			id: "Energy Feather",
			th: "เอนเนอร์จี้ฟีเธอร์",
			'zh-tw': "能量羽毛",
			'zh-cn': "能量羽毛"
		},

		damage: "30×",

		effect: {
			ja: "このポケモンについているエネルギーの数×30ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon ini.",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x30",
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×30點傷害。",
			'zh-cn': "造成這隻寶可夢身上附加的能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card