import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'it-it': "Skorupi",
		'de-de': "Pionskora",
		'pt-br': "Skorupi",
		'ko-kr': "스콜피"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [451],
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "After burrowing into the sand, it waits patiently for prey to come near. This Pokémon and Sizzlipede share common descent.",
		'fr-fr': "Il s'enfouit dans le sable et attend patiemment ses proies.\nIl a des ancêtres en commun avec Grillepattes.",
		'es-es': "Se entierra en la arena y aguarda inmóvil a sus presas.\nSus antepasados están relacionados con los de Sizzlipede.",
		'it-it': "Si nasconde nella sabbia e aspetta immobile la\npreda. Lui e Sizzlipede hanno antenati in comune.",
		'de-de': "Dieses Pokémon vergräbt sich im Sand und\nlauert dort regungslos seiner Beute auf.\nEs ist artverwandt mit Thermopod.",
		'pt-br': "Após se enterrar na areia, espera pacientemente\numa presa se aproximar. Este Pokémon e Sizzlipede\ntêm uma descendência em comum.",
		'ko-kr': "모래에 몸을 파묻은 채\n가만히 먹이를 기다린다.\n태우지네와 조상이 가깝다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'de-de': "Durchbohren",
			'pt-br': "Perfurar",
			'ko-kr': "궤찌르기"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
