import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
		es: "Gogoat",
		it: "Gogoat",
		pt: "Gogoat",
		de: "Chevrumm"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Milk Drink",
				fr: "Lait à Boire",
				es: "Batido",
				it: "Buonlatte",
				pt: "Leite de Cura",
				de: "Milchgetränk"
			},
			effect: {
				en: "Flip 2 coins. For each heads, heal 40 damage from this Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, soignez 40 dégâts à ce Pokémon.",
				es: "Lanza 2 monedas. Por cada cara, cura 40 puntos de daño a este Pokémon.",
				it: "Lancia due volte una moneta. Ogni volta che esce testa, cura questo Pokémon da 40 danni.",
				pt: "Jogue 2 moedas. Para cada cara, cure 40 pontos de dano deste Pokémon.",
				de: "Wirf 2 Münzen. Heile pro Kopf 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
				es: "Doble Filo",
				it: "Sdoppiatore",
				pt: "Faca de Dois Gumes",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Este Pokémon causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355531,
		tcgplayer: 165657
	}
}

export default card
