import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [338],
	set: Set,

	name: {
		'en-us': "Solrock",
		'fr-fr': "Solaroc",
		'es-es': "Solrock",
		'it-it': "Solrock",
		'pt-br': "Solrock",
		'de-de': "Sonnfel"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sun Energy",
			'fr-fr': "Énergie Solaire",
			'es-es': "Energía Solar",
			'it-it': "Energia Solare",
			'pt-br': "Energia do Sol",
			'de-de': "Sonnenenergie"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Psychic Energy card from your discard pile to 1 of your Lunatone.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l'un de vos Séléroc.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Psychic de tu pila de descartes a 1 de tus Lunatone.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Lunatone una carta Energia Psychic dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar 1 carta de Energia Psychic da sua pilha de descarte a 1 dos seus Lunatone.",
			'de-de': "Einmal während deines Zuges kannst du 1 Psychic-Energiekarte aus deinem Ablagestapel an 1 deiner Lunastein anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "When it rotates itself, it gives off light similar to the sun, thus blinding its foes.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665669,
				tcgplayer: 276993
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665669,
				tcgplayer: 276993
			}
		},
	],
}

export default card
