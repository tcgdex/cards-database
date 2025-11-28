import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		de: "Elektek",
		'pt-br': "Electabuzz",
		ko: "에레브"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [125],
	hp: 80,
	types: ["Lightning"],

	description: {
		en: "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
		fr: "De nombreuses centrales électriques gardent\ndes Pokémon Sol à proximité afin d'empêcher\nles Élektek de leur voler de l'électricité.",
		es: "Es habitual que las centrales eléctricas cuenten\ncon Pokémon de tipo Tierra para hacer frente\na los Electabuzz ávidos de electricidad.",
		it: "Molte centrali elettriche utilizzano\nPokémon di tipo Terra per difendersi\ndagli Electabuzz a caccia di elettricità.",
		de: "In vielen Elektrizitätswerken werden Pokémon\nvom Typ Boden eingesetzt, um Elektek davon\nabzuhalten, den dortigen Strom anzuzapfen.",
		'pt-br': "Muitas usinas mantêm Pokémon de tipo Terrestre\npor perto. Fazem isso para protegê-las de Electabuzz\nque aparecem em busca de eletricidade.",
		ko: "전기를 노리는 에레브를\n퇴치하고자 땅포켓몬을 두는\n발전소도 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Charge",
			fr: "Chargeur",
			es: "Carga",
			it: "Sottocarica",
			de: "Ladevorgang",
			'pt-br': "Carga",
			ko: "충전"
		},

		cost: ["Lightning"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			fr: "Prenez une Énergie {L} de votre zone Énergie et attachez-la à ce Pokémon.",
			es: "Une 1 Energía {L} de tu área de Energía a este Pokémon.",
			it: "Prendi un'Energia {L} dalla tua Zona Energia e assegnala a questo Pokémon.",
			de: "Lege 1 {L}-Energie aus deinem Energiebereich an dieses Pokémon an.",
			'pt-br': "Pegue 1 Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
			ko: "자신의 에너지존에서 {L}에너지를 1개 내보내 이 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
