import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ドオーex",
		'zh-tw': "帕底亞 土王ex",
		'th-th': "พัลเดีย โดะโอex",
		'id-id': "Paldean Clodsire ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "どくのぬまち",
			'zh-tw': "毒之沼地",
			'th-th': "หนองน้ำพิษ",
			'id-id': "Tanah Rawa Beracun"
		},

		effect: {
			'ja-jp': "場にスタジアムが出ているなら、自分の番に1回使える。相手のバトルポケモンをどくにする。",
			'zh-tw': "若場上有競技場卡，則在自己的回合時可使用1次。將對手的戰鬥寶可夢【中毒】。",
			'th-th': "ถ้ามีการ์ดสเตเดียมอยู่บนกระดาน ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri jika ada Stadium di Arena. Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ニードルボーン",
			'zh-tw': "尖刺骨",
			'th-th': "นีดเดิ้ลโบน",
			'id-id': "Needle Bone"
		},

		damage: 200,

		effect: {
			'ja-jp': "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701108,
				tcgplayer: 568177,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card