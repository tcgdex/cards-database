import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		de: "Enekoro",
		'pt-br': "Delcatty",
		ko: "델케티"
	},

	illustrator: "0313",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [301],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty"
	},

	description: {
		en: "It dislikes dirty places. It often searches for a comfortable place in which to groom itself.",
		fr: "Il déteste la saleté et passe son temps à\nentretenir sa fourrure, confortablement installé.",
		es: "No soporta los lugares sucios. Le encanta acicalarse\nel pelaje cuando está a gusto en un sitio.",
		it: "Detesta gli ambienti sporchi. Se ne sta sempre\nad allisciarsi la pelliccia in luoghi accoglienti.",
		de: "Hasst schmutzige Orte. Behagt ihm ein Platz,\nfängt es sofort an, sein glänzendes Fell zu pflegen.",
		'pt-br': "Detesta lugares sujos. Frequentemente,\nprocura lugares confortáveis para se embelezar.",
		ko: "더러운 곳을 아주 싫어한다.\n편안한 곳에서\n늘 털을 다듬고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Energy Assist",
			fr: "Assistance Énergétique",
			es: "Asistencia de Energía",
			it: "Assistienergia",
			de: "Energieförderung",
			'pt-br': "Socorro de Energia",
			ko: "에너지 어시스트"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "Take a {C} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
			fr: "Prenez une Énergie {C} de votre zone Énergie et attachez-la à un de vos Pokémon de Banc.",
			es: "Une 1 Energía {C} de tu área de Energía a 1 de tus Pokémon en Banca.",
			it: "Prendi un'Energia {C} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon in panchina.",
			de: "Lege 1 {C}-Energie aus deinem Energiebereich an 1 Pokémon auf deiner Bank an.",
			'pt-br': "Pegue uma Energia {C} da sua Zona de Energia e ligue-a 1 dos seus Pokémon no Banco.",
			ko: "자신의 에너지존에서 {C}에너지를 1개 내보내 벤치 포켓몬에게 붙인다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card
