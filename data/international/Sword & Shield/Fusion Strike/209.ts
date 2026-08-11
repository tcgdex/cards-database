import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [235],
	set: Set,

	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'es-es': "Smeargle",
		'it-it': "Smeargle",
		'pt-br': "Smeargle",
		'de-de': "Farbeagle"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mitsuhiro Arita",

	description: {
		'en-us': "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sketching Trash",
			'fr-fr': "Corbeille Esquissée",
			'de-de': "Müllskizze",
			'es-es': "Basura Boceto",
			'pt-br': "Desenhando Lixo",
			'it-it': "Bozza di Scarti"
		},

		effect: {
			'en-us': "Put up to 2 Fusion Strike Trainer cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 cartes Dresseur Poing de Fusion de votre pile de défausse à votre main.",
			'de-de': "Nimm bis zu 2 Fusionsangriff-Trainerkarten aus deinem Ablagestapel auf deine Hand.",
			'es-es': "Pon hasta 2 cartas de Entrenador de Golpe Fusión de tu pila de descartes en tu mano.",
			'pt-br': "Coloque até 2 cartas de Treinador Golpe Fusão da sua pilha de descarte na sua mão.",
			'it-it': "Prendi fino a due carte Allenatore Colpo Fusione dalla tua pila degli scarti e aggiungile alle carte che hai in mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'de-de': "Schweifvertrimmer",
			'es-es': "Coletón",
			'pt-br': "Surra de Cauda",
			'it-it': "Codabotta"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582944,
				tcgplayer: 253305
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582944,
				tcgplayer: 253305
			}
		},
	],
}

export default card
