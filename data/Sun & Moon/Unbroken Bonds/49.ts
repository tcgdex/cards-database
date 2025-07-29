import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		it: "Seaking",
		pt: "Seaking",
		de: "Golking"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Enhanced Horn",
				fr: "Corne Améliorée",
				es: "Cuerno Mejorado",
				it: "Ipercorno",
				pt: "Chifre Acentuado",
				de: "Spezial-Horn"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has a Pokémon Tool card attached to it, flip 6 coins instead.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si une carte Outil Pokémon est attachée à ce Pokémon, lancez 6 pièces à la place.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara. Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, lanza 6 monedas.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa. Se questo Pokémon ha una carta Oggetto Pokémon assegnata, invece, lancia sei volte una moneta.",
				pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara. Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, jogue 6 moedas ao invés de 2.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu. Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, wirf stattdessen 6 Münzen."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372340
	}
}

export default card
