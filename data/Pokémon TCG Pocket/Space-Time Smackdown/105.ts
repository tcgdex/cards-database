import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		it: "Skorupi",
		de: "Pionskora",
		'pt-br': "Skorupi",
		ko: "스콜피"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "After burrowing into the sand, it waits patiently for prey to come near. This Pokémon and Sizzlipede share common descent.",
		fr: "Il s'enfouit dans le sable et attend patiemment ses proies.\nIl a des ancêtres en commun avec Grillepattes.",
		es: "Se entierra en la arena y aguarda inmóvil a sus presas.\nSus antepasados están relacionados con los de Sizzlipede.",
		it: "Si nasconde nella sabbia e aspetta immobile la\npreda. Lui e Sizzlipede hanno antenati in comune.",
		de: "Dieses Pokémon vergräbt sich im Sand und\nlauert dort regungslos seiner Beute auf.\nEs ist artverwandt mit Thermopod.",
		'pt-br': "Após se enterrar na areia, espera pacientemente\numa presa se aproximar. Este Pokémon e Sizzlipede\ntêm uma descendência em comum.",
		ko: "모래에 몸을 파묻은 채\n가만히 먹이를 기다린다.\n태우지네와 조상이 가깝다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			it: "Perforare",
			de: "Durchbohren",
			'pt-br': "Perfurar",
			ko: "궤찌르기"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
