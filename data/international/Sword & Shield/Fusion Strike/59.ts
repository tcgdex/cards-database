import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [184],
	set: Set,

	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Sanosuke Sakuma",

	description: {
		'en-us': "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Dive and Rescue",
			'fr-fr': "Plongée Rescousse",
			'de-de': "Tauchen und Retten",
			'es-es': "Zambullida y Rescate",
			'pt-br': "Mergulhar e Resgatar",
			'it-it': "Tuffo e Salvataggio"
		},

		effect: {
			'en-us': "Put up to 3 in any combination of Pokémon and Supporter cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez à votre main une combinaison d'un maximum de 3 cartes Pokémon et Supporter de votre pile de défausse.",
			'de-de': "Nimm eine beliebige Kombination aus bis zu 3 Pokémon und Unterstützerkarten aus deinem Ablagestapel auf deine Hand.",
			'es-es': "Pon hasta 3 cartas de Pokémon y de Partidario, en cualquier combinación, de tu pila de descartes en tu mano.",
			'pt-br': "Coloque até 3 cartas de Pokémon e de Apoiador da sua pilha de descarte na sua mão em qualquer combinação.",
			'it-it': "Prendi fino a tre Pokémon e carte Aiuto in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'de-de': "Surfer",
			'es-es': "Surf",
			'pt-br': "Surfar",
			'it-it': "Surf"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582193,
				tcgplayer: 253190
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582193,
				tcgplayer: 253190
			}
		},
	],
}

export default card
