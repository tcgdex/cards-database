import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Runerigus",
		fr: "Tutétékri de Galar",
		es: "Runerigus de Galar",
		it: "Runerigus di Galar",
		pt: "Runerigus de Galar",
		de: "Galar-Oghnatoll"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Yamask",
		fr: "Tutafeh de Galar"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spreading Spite",
				fr: "Mépris Réparti",
				es: "Esparcir Rencor",
				it: "Spargidispetti",
				pt: "Disseminar Rancor",
				de: "Boshafte Ausbreitung"
			},
			effect: {
				en: "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
				es: "Por cada contador de daño en este Runerigus de Galar, pon 2 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Per ogni segnalino danno presente su questo Runerigus di Galar, metti due segnalini danno sui Pokémon del tuo avversario nel modo che preferisci.",
				pt: "Para cada contador de dano neste Runerigus de Galar, coloque 2 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege für jede Schadensmarke auf diesem Galar-Oghnatoll 2 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mad Hammer",
				fr: "Marteau en Folie",
				es: "Martillo Enloquecido",
				it: "Martello Pazzo",
				pt: "Martelo Insano",
				de: "Verrückter Hammer"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 100,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
