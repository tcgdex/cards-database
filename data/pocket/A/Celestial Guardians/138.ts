import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'de-de': "Velursi",
		'pt-br': "Stufful",
		'ko-kr': "포곰곰"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [759],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "Its fluffy fur is a delight to pet, but carelessly reaching out to touch this Pokémon could result in painful retaliation.",
		'fr-fr': "Sa fourrure duveteuse est très agréable\nà caresser, mais ceux qui la touchent sans\nprévenir s'exposent à une correction brutale.",
		'es-es': "Su suave pelaje invita a acariciarlo, pero quien cometa\nsemejante temeridad recibirá un severo escarmiento.",
		'it-it': "Il suo soffice manto è molto piacevole da accarezzare, ma\nse lo si sfiora inavvertitamente si rischia di venire attaccati.",
		'de-de': "Sein Pelz ist wunderbar flauschig. Wagt man es jedoch,\ndiesen zu berühren, setzt es sich ohne Rücksicht auf\nVerluste zur Wehr.",
		'pt-br': "O seu pelo fofinho é uma delícia de acariciar,\nmas tocá-lo sem muito cuidado pode resultar\nem uma retaliação dolorosa.",
		'ko-kr': "푹신푹신한 털은 감촉이\n뛰어나지만 섣불리 손을 댔다간\n호되게 반격을 당하고 만다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'de-de': "Einhämmern",
			'pt-br': "Martelada",
			'ko-kr': "한방 먹이기"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card