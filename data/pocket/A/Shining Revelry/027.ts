import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmo",
		fr: "Pohmotte",
		es: "Pawmo",
		it: "Pawmo",
		de: "Pamamo",
		'pt-br': "Pawmo",
		ko: "빠모트"
	},

	illustrator: "Saboteri",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [922],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pawmi"
	},

	description: {
		en: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
		fr: "Quand on attaque son groupe, ce Pokémon\nest le premier à riposter. Il défait ses adversaires\navec un art martial qui repose sur l'électricité.",
		es: "Cuando su manada se ve amenazada, atacan a la\nvanguardia usando un arte marcial caracterizado\npor el empleo de descargas eléctricas.",
		it: "Quando il branco viene attaccato, lotta in prima\nfila contro il nemico per atterrarlo con tecniche\nmarziali che rilasciano scariche elettriche.",
		de: "Wird seine Kolonie angegriffen, stürzt es sich\nsofort in den Kampf und besiegt den Feind mit\nKampftechniken, die auf Elektroschocks setzen.",
		'pt-br': "Quando seu grupo é atacado, Pawmo é o primeiro a\nentrar na batalha, derrotando os inimigos com uma\ntécnica de combate que utiliza choques elétricos.",
		ko: "무리가 공격을 받으면\n전격을 날리는 격투기로\n먼저 싸움을 걸고 적을 쓰러뜨린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Punch",
			fr: "Koud'Poing",
			es: "Puño",
			it: "Pugno",
			de: "Boxhieb",
			'pt-br': "Soco",
			ko: "펀치"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card