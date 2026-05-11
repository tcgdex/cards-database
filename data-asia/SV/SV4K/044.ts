import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠",
		th: "ซูแบท",
		ko: "주뱃"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。",
		'zh-tw': "棲息在陽光照射不到的洞窟裡。到了早上就會和夥伴相聚， 一邊互相取暖一邊睡覺。",
		th: "อาศัยอยู่ในถ้ำที่แสงแดดส่องไม่ถึง เมื่อถึงเวลาเช้าจะรวมกลุ่มกับพวกพ้องเพื่อสร้างความอบอุ่นแก่ร่างกายและนอนหลับ",
		ko: "볕이 들지 않는 동굴에 산다. 아침이 되면 동료들끼리 모여 서로의 온기를 나누면서 잔다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ちょうおんぱ",
			'zh-tw': "超音波",
			th: "ซูเปอร์โซนิค",
			ko: "초음파"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【混亂】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 혼란으로 만든다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "するどいはね",
			'zh-tw': "銳利羽",
			th: "ขนปีกแหลมคม",
			ko: "날카로운날개"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741401
	}
}

export default card