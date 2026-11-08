import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [937],
	set: Set,

	name: {
		'en-us': "Ceruledge ex",
		'fr-fr': "Malvalame-ex",
		'es-es': "Ceruledge ex",
		'it-it': "Ceruledge-ex",
		'pt-br': "Ceruledge ex",
		'de-de': "Azugladis-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Abyssal Flames",
			'fr-fr': "Flammes Abyssales",
			'es-es': "Llamas Abismales",
			'it-it': "Fiamme Abissali",
			'pt-br': "Chamas Abissais",
			'de-de': "Flammen des Abgrunds"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Energy card in your discard pile.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie dans votre pile de défausse.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada carta de Energía en tu pila de descartes.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni carta Energia nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada carta de Energia na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jede Energiekarte in deinem Ablagestapel 20 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Psychic", "Metal"],

		name: {
			'en-us': "Raging Amethyst",
			'fr-fr': "Améthyste Enragée",
			'es-es': "Amatista Iracunda",
			'it-it': "Furia di Ametista",
			'pt-br': "Ametista Feroz",
			'de-de': "Furioser Amethyst"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 280
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794302,
				tcgplayer: 589892
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"]
		}
	],

	suffix: "ex",
	illustrator: "5ban Graphics",
	
}

export default card
