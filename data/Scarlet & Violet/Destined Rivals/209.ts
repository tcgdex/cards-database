import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Ho-Oh ex",
		fr: "Ho-Oh-ex de Luth",
		de: "Klarins Ho-Oh-ex",
		it: "Ho-Oh-ex di Armonio",
		es: "Ho-Oh ex de Eco",
		pt: "Ho-Oh ex do Ethan",
		'es-mx': "Ho-Oh ex de Ethan"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Golden Flame",
			fr: "Flamme Dorée",
			de: "Goldene Flamme",
			it: "Fiamma Dorata",
			es: "Llama Dorada",
			pt: "Chama Dourada",
			'es-mx': "Llama Dorada"
		},

		effect: {
			en: "Once during your turn, you may attach up to 2 Basic {R} Energy cards from your hand to 1 of your Benched Ethan's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {R} de base de votre main à l'un de vos Pokémon de Luth de Banc.",
			de: "Einmal während deines Zuges kannst du bis zu 2 Basis-{R}-Energiekarten aus deiner Hand an 1 Klarins Pokémon auf deiner Bank anlegen.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon di Armonio in panchina fino a due carte Energia base {R} dalla tua mano.",
			es: "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía {R} Básica de tu mano a uno de tus Pokémon de Eco en Banca.",
			pt: "Uma vez durante o seu turno, você poderá ligar até 2 cartas de Energia {R} Básica da sua mão a 1 dos seus Pokémon do Ethan no Banco.",
			'es-mx': "Una vez durante tu turno, puedes unir hasta 2 cartas de Energía {R} Básica de tu mano a 1 de tus Pokémon de Ethan en Banca."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			en: "Shining Feathers",
			fr: "Plumes Brillantes",
			de: "Schimmernde Federn",
			it: "Piume Lucenti",
			es: "Plumas Radiantes",
			pt: "Plumas Brilhantes",
			'es-mx': "Plumas Radiantes"
		},

		effect: {
			en: "Heal 50 damage from each of your Pokémon.",
			fr: "Soignez 50 dégâts de chacun de vos Pokémon.",
			de: "Heile 50 Schadenspunkte bei jedem deiner Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 50 danni.",
			es: "Cura 50 puntos de daño a cada uno de tus Pokémon.",
			pt: "Cure 50 pontos de dano de cada um dos seus Pokémon.",
			'es-mx': "Cura 50 puntos de daño a cada uno de tus Pokémon."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card