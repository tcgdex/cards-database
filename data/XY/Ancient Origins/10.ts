import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		de: "Honweisel"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
		es: "Combee",
		it: "Combee",
		pt: "Combee",
		de: "Wadribie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Intelligence Gathering",
				fr: "Collecte de Renseignements",
				es: "Espionaje",
				it: "Raccolta Informazioni",
				pt: "Reunião de Inteligência",
				de: "Informationssammler"
			},
			effect: {
				en: "You may draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				it: "Puoi pescare fino ad avere sei carte in mano.",
				pt: "Você poderá comprar cards até ter 6 cards em sua mão.",
				de: "Du kannst so viele Karten ziehen, bis du 6 Karten auf deiner Hand hast."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bee Revenge",
				fr: "Abeille Vindicative",
				es: "Venganza Abeja",
				it: "Apevendetta",
				pt: "Vingança da Abelha",
				de: "Bienenvergeltung"
			},
			effect: {
				en: "This attack does 10 more damage for each Pokémon in your discard pile.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
				es: "Este ataque hace 10 puntos de daño más por cada Pokémon en tu pila de descartes.",
				it: "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua pila degli scarti.",
				pt: "Este ataque causa 10 de danos adicionais para cada Pokémon em sua pilha de descarte.",
				de: "Dieser Angriff fügt für jedes Pokémon in deinem Ablagestapel 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
