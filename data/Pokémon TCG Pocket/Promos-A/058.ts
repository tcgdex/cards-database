import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		es: "Pachirisu",
		it: "Pachirisu",
		de: "Pachirisu",
		'pt-br': "Pachirisu",
		ko: "파치리스"
	},

	illustrator: "OOYAMA",
	rarity: "None",
	category: "Pokemon",

	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "It's one of the kinds of Pokémon with electric\ncheek pouches. It shoots charges from its tail.",
		fr: "Pachirisu fait partie des Pokémon aux joues électriques.\nIl libère l'énergie qu'il accumule par la queue.",
		es: "Forma parte del grupo de Pokémon que\nposee bolsas de electricidad en las mejillas.\nDescarga por la cola la electricidad que acumula.",
		it: "Appartiene alla tipologia di Pokémon\nmuniti di sacche elettriche sulle guance.\nRilascia dalla coda l'elettricità accumulata.",
		de: "Pachirisu ist eines der Pokémon, die mit ihren\nBackentaschen Elektrizität erzeugen. Den so\ngesammelten Strom gibt es über den Schweif ab.",
		'pt-br': "É um dos tipos de Pokémon com bolsas elétricas\nnas bochechas. Ele dispara cargas de sua cauda.",
		ko: "볼에 전기 주머니를 가진 포켓몬의 일종.\n꼬리에 모인 전기를 방출한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Plasma",
			fr: "Plasma",
			es: "Plasma",
			it: "Plasma",
			de: "Plasma",
			'pt-br': "Plasma",
			ko: "플라스마"
		},

		cost: ["Lightning"],
		damage: 10,

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched {L} Pokémon.",
			fr: "Prenez une Énergie {L} de votre zone Énergie et attachez-la à l'un de vos Pokémon {L} de Banc.",
			es: "Une 1 Energía {L} de tu área de Energía a 1 de tus Pokémon {L} en Banca.",
			it: "Prendi un'Energia {L} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon {L} in panchina.",
			de: "Lege 1 {L}-Energie aus deinem Energiebereich an 1 {L}-Pokémon auf deiner Bank an.",
			'pt-br': "Pegue 1 Energia {L} da sua Zona de Energia e a 1 dos seus Pokémon {L} no Banco.",
			ko: "자신의 에너지존에서 {L}에너지를 1개 내보내 벤치의 {L} 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
