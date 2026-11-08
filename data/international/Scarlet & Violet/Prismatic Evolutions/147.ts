import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [937],
	set: Set,

	name: {
		'en-us': "Ceruledge ex",
		'fr-fr': "Malvalame-ex",
		'es-es': "Ceruledge ex",
		'pt-br': "Ceruledge ex",
		'it-it': "Ceruledge-ex",
		'de-de': "Azugladis-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'pt-br': "Charcadet",
		'it-it': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Abyssal Flames",
			'fr-fr': "Flammes Abyssales",
			'es-es': "Llamas Abismales",
			'pt-br': "Chamas Abissais",
			'it-it': "Fiamme Abissali",
			'de-de': "Flammen des Abgrunds"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each Energy card in your discard pile.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie dans votre pile de défausse.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada carta de Energía en tu pila de descartes.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada carta de Energia na sua pilha de descarte.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni carta Energia nella tua pila degli scarti.",
			'de-de': "Diese Attacke fügt für jede Energiekarte in deinem Ablagestapel 20 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fire", "Psychic", "Metal"],

		name: {
			'en-us': "Raging Amethyst",
			'fr-fr': "Améthyste Enragée",
			'es-es': "Amatista Iracunda",
			'pt-br': "Ametista Feroz",
			'it-it': "Furia di Ametista",
			'de-de': "Furioser Amethyst"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
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

	suffix: "ex",
	illustrator: "akagi",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805541,
				tcgplayer: 610502
			}
		},
	],
}

export default card
