import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dialga ex",
		'fr-fr': "Dialga-ex",
		'es-es': "Dialga ex",
		'it-it': "Dialga-ex",
		'de-de': "Dialga-ex",
		'pt-br': "Dialga ex",
		'ko-kr': "디아루가 ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Three Star",
	category: "Pokemon",

	dexId: [483],
	hp: 150,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Metallic Turbo",
			'fr-fr': "Turbo Métallique",
			'es-es': "Turbo Metálico",
			'it-it': "Metalturbo",
			'de-de': "Metallturbo",
			'pt-br': "Turbo Metálico",
			'ko-kr': "메탈터보"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "Take 2 {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
			'fr-fr': "Prenez 2 Énergies {M} de votre zone Énergie et attachez-les à l'un de vos Pokémon de Banc.",
			'es-es': "Une 2 Energías {M} de tu área de Energía a 1 de tus Pokémon en Banca.",
			'it-it': "Prendi 2 un'Energia {M} dalla Zona Energia e assegnala a uno dei tuoi Pokémon in panchina.",
			'de-de': "Lege 2 {M}-Energien aus deinem Energiebereich an 1 Pokémon auf deiner Bank an.",
			'pt-br': "Pegue 2 Energias {M} da sua Zona de Energia e ligue-as a 1 dos seus Pokémon no Banco.",
			'ko-kr': "자신의 에너지존에서 {M}에너지를 2개 내보내 벤치 포켓몬 1마리에게 붙인다."
		}
	}, {
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'de-de': "Schwerer Einschlag",
			'pt-br': "Impacto Pesado",
			'ko-kr': "헤비임팩트"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
