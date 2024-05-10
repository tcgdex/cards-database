import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アメモース",
		'zh-tw': "雨翅蛾",
		th: "อาเมมอธ",
		id: "Masquerain"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [284],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "４枚の 羽で 浮かび上がり 前後 左右 自由自在に 飛びまわることが できる。",
		'zh-tw': "能用４片翅膀浮在空中，並前後左右自在地飛來飛去。",
		th: "สามารถบินไปรอบ ๆ ขึ้นลงซ้ายขวาได้อย่างอิสระด้วยปีกทั้งสี่",
		id: "Masquerain dapat melayang dan terbang ke segala arah secara bebas dengan keempat sayapnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "パニックもよう",
			'zh-tw': "恐慌花紋",
			th: "ลายตื่นตระหนก",
			id: "Pola Panik"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、トラッシュする。",
			'zh-tw': "擲硬幣直到出現反面，在不看手牌正面的情況下，選擇與正面出現的次數相同數量的對手的手牌，將其丟棄。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย เลือกการ์ดจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ตามจำนวนครั้งที่ออกหัว ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin hingga hasilnya sisi belakang. Pilih kartu dari Kartu Pegangan lawan tanpa melihat sisi depan untuk tiap lemparan dengan hasil sisi depan, lalu buang ke Trash."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしのさざめき",
			'zh-tw': "蟲鳴",
			th: "เสียงฮัมของแมลง",
			id: "Dengungan Serangga"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card