import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [979],
	set: Set,

	name: {
		'en-us': "Annihilape",
		'fr-fr': "Courrousinge",
		'es-es': "Annihilape",
		'it-it': "Annihilape",
		'pt-br': "Annihilape",
		'de-de': "Epitaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Tantrum",
			'fr-fr': "Mauvaise Humeur",
			'es-es': "Rabieta",
			'it-it': "Collera",
			'pt-br': "Petulância",
			'de-de': "Rappel"
		},

		effect: {
			'en-us': "This Pokémon is now Confused.",
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'pt-br': "Este Pokémon agora está Confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 130
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Destined Fight",
			'fr-fr': "Combat du Destin",
			'es-es': "Lucha Predestinada",
			'it-it': "Lotta Predestinata",
			'pt-br': "Luta Predestinada",
			'de-de': "Abgangsgefecht"
		},

		effect: {
			'en-us': "Both Active Pokémon are Knocked Out.",
			'fr-fr': "Les deux Pokémon Actifs sont mis K.O.",
			'es-es': "Ambos Pokémon Activos quedan Fuera de Combate.",
			'it-it': "Entrambi i Pokémon attivi vengono messi KO.",
			'pt-br': "Ambos os Pokémon Ativos são Nocauteados.",
			'de-de': "Beide Aktiven Pokémon werden kampfunfähig."
		}
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794416,
				tcgplayer: 589863
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794416,
				tcgplayer: 589863
			}
		},
	],

	illustrator: "SIE NANAHARA",

}

export default card
