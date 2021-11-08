import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Victini V",
		fr: "Victini V",
		es: "Victini V",
		pt: "Victini V"
	},

	rarity: "None",
	hp: 190,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Spreading Flames",
			fr: "Flammes Rampantes",
			es: "Llamas Dispersas",
			pt: "Spreading Flames"
		},

		effect: {
			en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Une hasta 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
			pt: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Energy Burst",
			fr: "Explosion d'Énergie",
			es: "Explosión de Energía",
			pt: "Energy Burst"
		},

		effect: {
			en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			es: "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			pt: "This attack does 30 damage for each Energy attached to both Active Pokémon."
		},

		damage: "30×",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	dexId: [494],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
