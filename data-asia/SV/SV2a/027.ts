import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンド",
		'zh-tw': "穿山鼠",
		th: "แซนด์",
		id: "Sandshrew"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [27],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "地面を 掘って 巣穴を つくる。 地中の 硬い 岩も 鋭い ツメで 砕いて 掘り進むぞ。",
		'zh-tw': "會在地面挖洞築巢。即使遇到地下堅硬的岩石， 也會用銳利的爪子擊碎並向前挖進。",
		th: "จะขุดลงไปใต้พื้นดินเพื่อสร้างรัง ถึงจะเป็นหินแข็งที่อยู่ใต้ดิน ก็จะใช้กรงเล็บคมเจาะจนแตกเป็นผุยผงแล้วขุดลงไปต่อ",
		id: "Sandshrew menggali permukaan tanah untuk membuat sarang. Pokémon ini terus menggali sambil menghancurkan batu keras di dalam tanah menggunakan cakar tajamnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すなでかくす",
			'zh-tw': "流沙藏身",
			th: "ซุกซ่อนด้วยทราย",
			id: "Sembunyikan di Pasir"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のトラッシュにあるトレーナーズは、相手のグッズまたはサポートの効果で、山札にもどせない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的棄牌區的訓練家卡，無法因對手的物品卡或者支援者卡的效果而放回牌庫。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ การ์ดเทรนเนอร์ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม จะนำใส่กลับไปในสำรับการ์ด ด้วยเอฟเฟกต์ของการ์ดไอเท็มหรือการ์ดซัพพอร์ตของฝ่ายตรงข้ามไม่ได้",
			id: "Selama Pokémon ini ada di Arena, Trainer yang ada di Trash lawan tidak dapat dikembalikan ke Deck menggunakan efek Item atau Supporter lawan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			th: "ข่วน",
			id: "Menggaruk"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719469
	}
}

export default card