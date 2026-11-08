import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ethan's Ho-Oh ex",
		'fr-fr': "Ho-Oh-ex de Luth",
		'es-es': "Ho-Oh ex de Eco",
		'es-mx': "Ho-Oh ex de Ethan",
		'de-de': "Klarins Ho-Oh-ex",
		'it-it': "Ho-Oh-ex di Armonio",
		'pt-br': "Ho-Oh ex do Ethan"
	},

	suffix: "ex",
	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Golden Flame",
			'fr-fr': "Flamme Dorée",
			'es-es': "Llama Dorada",
			'es-mx': "Llama Dorada",
			'de-de': "Goldene Flamme",
			'it-it': "Fiamma Dorata",
			'pt-br': "Chama Dourada"
		},

		effect: {
			'en-us': "Once during your turn, you may attach up to 2 Basic {R} Energy cards from your hand to 1 of your Benched Ethan's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {R} de base de votre main à l'un de vos Pokémon de Luth de Banc.",
			'es-es': "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía {R} Básica de tu mano a uno de tus Pokémon de Eco en Banca.",
			'es-mx': "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía {R} Básica de tu mano a 1 de tus Pokémon de Ethan en Banca.",
			'de-de': "Einmal während deines Zuges kannst du bis zu 2 Basis-{R}-Energiekarten aus deiner Hand an 1 Klarins Pokémon auf deiner Bank anlegen.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon di Armonio in panchina fino a due carte Energia base {R} dalla tua mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar até 2 cartas de Energia {R} Básica da sua mão a 1 dos seus Pokémon do Ethan no Banco."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			'en-us': "Shining Feathers",
			'fr-fr': "Plumes Brillantes",
			'es-es': "Plumas Radiantes",
			'es-mx': "Plumas Radiantes",
			'de-de': "Schimmernde Federn",
			'it-it': "Piume Lucenti",
			'pt-br': "Plumas Brilhantes"
		},

		effect: {
			'en-us': "Heal 50 damage from each of your Pokémon.",
			'fr-fr': "Soignez 50 dégâts de chacun de vos Pokémon.",
			'es-es': "Cura 50 puntos de daño a cada uno de tus Pokémon.",
			'es-mx': "Cura 50 puntos de daño a cada uno de tus Pokémon.",
			'de-de': "Heile 50 Schadenspunkte bei jedem deiner Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 50 danni.",
			'pt-br': "Cure 50 pontos de dano de cada um dos seus Pokémon."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869637,
				tcgplayer: 675838
			}
		}
	],
}

export default card