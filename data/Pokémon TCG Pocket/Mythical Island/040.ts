import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		de: "Sabbaione",
		'pt-br': "Slurpuff",
		ko: "나루림"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix"
	},

	description: {
		en: "By taking in a person's scent, it can sniff out their mental and physical condition. It's hoped that this skill will have many medical applications.",
		fr: "Il peut diagnostiquer l'état de santé mentale et\nphysique de quelqu'un rien qu'à l'odorat. Un tel\ndon pourrait avoir des applications en médecine.",
		es: "Puede percibir el estado físico y mental de\nalguien solo con olerlo, lo que podría tener\naplicaciones útiles en el campo de la medicina.",
		it: "È in grado di comprendere lo stato fisico e\nmentale altrui dall'odore. Questa capacità\npotrebbe essere molto utile in campo medico.",
		de: "Es kann die körperliche und seelische Verfassung\nanderer anhand ihres Körpergeruchs erkennen.\nDies versucht man für die Medizin zu nutzen.",
		'pt-br': "Pelo aroma de uma pessoa, consegue detectar sua condição física e mental.\nEspera-se que um dia esta técnica tenha muitas aplicações na medicina.",
		ko: "체취로 몸과 마음의 상태를\n알아낸다. 의료계에서 응용될\n것으로 기대되고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			de: "Magischer Schuss",
			'pt-br': "Tiro Mágico",
			ko: "매지컬숏"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
