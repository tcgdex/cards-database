import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Celebi V",
		fr: "Celebi V",
		es: "Celebi V",
		it: "Celebi V",
		pt: "Celebi V",
		de: "Celebi V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 180,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Find a Friend",
				fr: "Trouver un Ami",
				es: "Encontrar un Amigo",
				it: "Trovamico",
				pt: "Encontre um Amigo",
				de: "Freunde finden"
			},
			effect: {
				en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Line Force",
				fr: "Force Linéaire",
				es: "Fuerza Lineal",
				it: "Schieraforza",
				pt: "Força Linear",
				de: "Gebündelte Kraft"
			},
			effect: {
				en: "This attack does 20 more damage for each of your Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
				es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no seu Banco.",
				de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	suffix: "V"
}

export default card
