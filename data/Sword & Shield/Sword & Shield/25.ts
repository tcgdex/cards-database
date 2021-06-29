import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Victini V",
		fr: "Victini V",
		es: "Victini V",
		it: "Victini V",
		pt: "Victini V",
		de: "Victini V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spreading Flames",
				fr: "Flammes Rampantes",
				es: "Llamas Dispersas",
				it: "Spargifiamma",
				pt: "Chamas Alastrantes",
				de: "Flammenausbreitung"
			},
			effect: {
				en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
				es: "Une hasta 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Assegna ai tuoi Pokémon fino a tre carte Energia Fire dalla tua pila degli scarti nel modo che preferisci.",
				pt: "Ligue até 3 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
				de: "Lege bis zu 3 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Energy Burst",
				fr: "Explosion d’Énergie",
				es: "Explosión de Energía",
				it: "Energiscoppio",
				pt: "Explosão de Energia",
				de: "Energieausbruch"
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
				es: "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				it: "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				pt: "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
				de: "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
