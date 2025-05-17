import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		de: "Bauz",
		'pt-br': "Rowlet",
		ko: "나몰빼미"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It sends its feathers, which are as sharp as blades, flying in attack. Its legs are strong, so its kicks are also formidable.",
		fr: "Il attaque en tirant des plumes acérées. La force\nde ses coups de patte est également redoutable.",
		es: "Usa sus afiladas plumas como arma arrojadiza y la\nfuerza de sus patas le permite asestar poderosas\npatadas que es mejor no subestimar.",
		it: "Attacca lanciando piume affilate come lame e può\nanche tirare poderosi calci con le zampe robuste.",
		de: "Es schleudert messerscharfe Federn auf seine Gegner.\nAber auch seine Tritte sind nicht zu unterschätzen,\ndenn es hat sehr kräftige Beine.",
		'pt-br': "Quando atacam, lançam suas penas, que são tão cortantes\nquanto lâminas. Suas pernas são robustas, por isso,\nseus chutes também são formidáveis.",
		ko: "칼같이 날카로운 날개를 날려\n공격한다. 발의 힘도 강해\n킥도 무시할 수 없다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			it: "Fogliame",
			de: "Blattwerk",
			'pt-br': "Folhagem",
			ko: "나뭇잎"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card