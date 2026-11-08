import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [299],
	set: Set,

	name: {
		'fr-fr': "Tarinor",
		'en-us': "Nosepass",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Collecte de Fer",
			'en-us': "Iron Collecting",
			'es-es': "Acopio de Hierro",
			'it-it': "Raccolta di Ferro",
			'pt-br': "Coleta de Ferro",
			'de-de': "Eisen sammeln"
		},

		effect: {
			'fr-fr': "Ajoutez jusqu'à 2 cartes Énergie {M} de base de votre pile de défausse à votre main.",
			'en-us': "Put up to 2 Basic {M} Energy cards from your discard pile into your hand.",
			'es-es': "Pon hasta 2 cartas de Energía {M} Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Energia base {M} dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Energia {M} Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Basis-{M}-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Roulé-Boulé",
			'en-us': "Rolling Tackle",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It hunts without twitching a muscle by pulling in its prey with powerful magnetism. But sometimes it pulls natural enemies in close.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725187,
				tcgplayer: 509795,
				cardtrader: 255792
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725187,
				tcgplayer: 509795,
				cardtrader: 255792
			}
		},
	],

	illustrator: "Nobuhiro Imagawa",

	
}

export default card
