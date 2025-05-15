import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"
const card: Card = {
	set: Set,
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		es: "Pachirisu",
		it: "Pachirisu",
		de: "Pachirisu",
		ko: "파치리스"
	},
	illustrator: "Tomowaka",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		en: "It's one of the kinds of Pokémon with electric cheek pouches. It shoots charges from its tail.",
		fr: "Pachirisu fait partie des Pokémon aux joues électriques.\nIl libère l'énergie qu'il accumule par la queue.",
		es: "Forma parte del grupo de Pokémon que\nposee bolsas de electricidad en las mejillas.\nDescarga por la cola la electricidad que acumula.",
		it: "Appartiene alla tipologia di Pokémon\nmuniti di sacche elettriche sulle guance.\nRilascia dalla coda l'elettricità accumulata.",
		de: "Pachirisu ist eines der Pokémon, die mit ihren\nBackentaschen Elektrizität erzeugen. Den so\ngesammelten Strom gibt es über den Schweif ab.",
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
			ko: "플라스마"
		},
		damage: 10,
		cost: ["Lightning"],
		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched  Pokémon.",
			fr: "Prenez une Énergie {L} de votre zone Énergie et attachez-la à l'un de vos Pokémon de Banc.",
			es: "Une 1 Energía {L} de tu área de Energía a 1 de tus Pokémon en Banca.",
			it: "Prendi un'Energia {L} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon in panchina.",
			de: "Lege 1 {L}-Energie aus deinem Energiebereich an 1 Pokémon auf deiner Bank an.",
			ko: "자신의 에너지존에서 {L}에너지를 1개 내보내 벤치 포켓몬에게 붙인다.",
			'pt-br': "Pegue uma Energia {L} da sua Zona de Energia e ligue-a 1 dos seus Pokémon no Banco."
		}
	}],
	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],
	retreat: 1,
	rarity: "One Shiny"
}
export default card