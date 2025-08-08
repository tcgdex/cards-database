import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [867],
	set: Set,

	name: {
		fr: "Tutétékri de Galar",
		en: "Galarian Runerigus",
		es: "Runerigus de Galar",
		it: "Runerigus di Galar",
		pt: "Runerigus de Galar",
		de: "Galar-Oghnatoll"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Tutafeh de Galar",
		en: "Galarian Yamask"
	},

	attacks: [{
		name: {
			fr: "Mépris Réparti",
			en: "Spreading Spite",
			es: "Esparcir Rencor",
			it: "Spargidispetti",
			pt: "Disseminar Rancor",
			de: "Boshafte Ausbreitung"
		},

		effect: {
			fr: "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			en: "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent's Pokémon in any way you like.",
			es: "Por cada contador de daño en este Runerigus de Galar, pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			it: "Per ogni segnalino danno presente su questo Runerigus di Galar, metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
			pt: "Para cada contador de dano neste Runerigus de Galar, coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
			de: "Lege für jede Schadensmarke auf diesem Galar-Oghnatoll 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Marteau en Folie",
			en: "Mad Hammer",
			es: "Martillo Enloquecido",
			it: "Martello Pazzo",
			pt: "Martelo Insano",
			de: "Verrückter Hammer"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "A powerful curse was woven into an ancient painting. After absorbing the spirit of a Yamask, the painting began to move."
	}
}

export default card
