import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "My Way",
				fr: "Ma Façon",
				es: "A mi Manera",
				it: "A Modo Mio",
				pt: "Meu Jeito",
				de: "Auf meine Art"
			},
			effect: {
				en: "If there is any Stadium card in play, this Pokémon has no Retreat Cost.",
				fr: "S'il y a une carte Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
				es: "Si hay alguna carta de Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				pt: "Se houver algum card de Estádio em jogo, este Pokémon não terá Custo para Recuar.",
				de: "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moonlight Gain",
				fr: "Soin au Clair de Lune",
				es: "Ganancia Lunar",
				it: "Cura Lunare",
				pt: "Ganho de Luar",
				de: "Mondlichtabsorption"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 de danos deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
