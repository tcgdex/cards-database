import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [702],
	set: Set,

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Electromagnetic Sonar",
			'fr-fr': "Sonar Électromagnétique",
			'es-es': "Sonar Electromagnético",
			'it-it': "Sonar Elettromagnetico",
			'pt-br': "Sonar Eletromagnético",
			'de-de': "Elektromagnetisches Sonar"
		},

		effect: {
			'en-us': "Put a Trainer card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Treinador da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794393,
				tcgplayer: 589914
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794393,
				tcgplayer: 589914
			}
		},
	],

	illustrator: "Uninori",
	
}

export default card
