import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racailloud'Alola",
		'es-es': "Geodudede Alola",
		'it-it': "Geodudedi Alola",
		'de-de': "Alola-Kleinstein",
		'pt-br': "Geodudede Alola",
		'ko-kr': "알로라꼬마돌"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [74],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "If you mistake it for a rock and step on it, it will headbutt you in anger. In addition to the pain, it will also zap you with a shock.",
		'fr-fr': "Il donne un violent coup de tête à quiconque\nle confond avec un caillou et lui marche dessus.\nLe coup est accompagné d'une petite décharge.",
		'es-es': "Si lo pisan al confundirlo con una roca, se enfada y\nembiste con la cabeza. Además de doler, da calambre.",
		'it-it': "Se lo si pesta scambiandolo per un sasso, si arrabbia e attacca\ncon delle testate che, oltre a far male, danno anche la scossa.",
		'de-de': "Verwechselt man es mit einem Felsbrocken und\ntritt darauf, erwarten einen eine schmerzhafte\nKopfnuss gepaart mit einem Stromschlag.",
		'pt-br': "Se confundir este Pokémon com uma pedra e pisar nele,\nvocê o irritará e levará uma cabeçada. Além da dor,\nvocê também será eletrocutado.",
		'ko-kr': "돌멩이로 착각해 밟으면\n화를 내며 박치기를 한다.\n통증뿐 아니라 찌릿찌릿하다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Knuckle Punch",
			'fr-fr': "Coud'Phalange",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'de-de': "Knöchelhieb",
			'pt-br': "Soco com Punho",
			'ko-kr': "꿀밤"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card