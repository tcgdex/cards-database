import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "モルフォン",
		'zh-tw': "摩魯蛾",
		th: "มอร์ฟอน",
		id: "Venomoth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [49],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "翅に りんぷんが ついていて ヒラヒラと 羽ばたくたびに 猛毒の粉を ばらまく。",
		'zh-tw': "翅膀上附著鱗粉，每次翩翩拍動翅膀， 就會散播劇毒的粉末。",
		th: "มีเกล็ดติดอยู่บนปีก และทุกครั้งที่กระพือปีกจะโปรยผงพิษรุนแรงไปทั่ว",
		id: "Terdapat sisik pada sayap Venomoth. Pokémon ini menyebarkan bubuk beracun tiap kali ia mengepakkan sayapnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "さくらんパウダー",
			'zh-tw': "錯亂粉",
			th: "ผงอลเวง",
			id: "Bubuk Distraksi"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。次の相手の番、相手は手札からグッズを出して使えない。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，對手無法從手牌使出物品卡。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน] เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดไอเท็มจากบนมือออกมาใช้ได้",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Pada giliran lawan berikutnya, lawan tidak dapat memainkan Item dari Kartu Pegangan."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			'zh-tw': "高速之翼",
			th: "สปีดวิง",
			id: "Speed Wing"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card