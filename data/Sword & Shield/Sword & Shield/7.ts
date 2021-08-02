import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		pt: "Maractus",
		de: "Maracamba"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		556,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Zzzt",
				fr: "Bzzz",
				es: "Bzzz",
				it: "Bzzz",
				pt: "Bzzz",
				de: "Piiieks"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Powerful Needles",
				fr: "Piquants Puissants",
				es: "Espinas Poderosas",
				it: "Spine Poderose",
				pt: "Espinhos Poderosos",
				de: "Kräftige Stacheln"
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
