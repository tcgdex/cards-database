import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "カゲボウズ",
		'zh-tw': "怨影娃娃",
		th: "คาเงะโบสึ",
		id: "Shuppet"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "だれかが だれかを 恨む 暗く 哀しい 気持ちを 吸い取って じわじわ 強くなる。",
		'zh-tw': "會吸取他人在怨恨著誰時散發出的黯淡悲傷之情， 讓自己一點一點地變強。",
		th: "ดูดซับความรู้สึกเศร้าอันมืดมนที่ใครโกรธแค้นใครสักคนเข้าไปแล้วค่อย ๆ แข็งแกร่งขึ้น",
		id: "Shuppet perlahan-lahan menjadi kuat dengan mengisap emosi hitam seperti kebencian dan kesedihan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かげでつつむ",
			'zh-tw': "影子包圍",
			th: "ห่อหุ้มด้วยเงา",
			id: "Bayangan Menyelimuti"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、相手は手札からグッズを出して使えない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，對手無法從手牌使出物品卡。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดไอเท็มจากบนมือออกมาใช้ได้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, lawan tidak dapat memainkan Item dari Kartu Pegangan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card