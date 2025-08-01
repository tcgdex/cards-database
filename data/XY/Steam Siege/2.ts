import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Storm",
				fr: "Tempête Verte",
				es: "Lluevehojas",
				it: "Verdebufera",
				pt: "Tempestade de Folhas",
				de: "Blättersturm"
			},
			effect: {
				en: "Heal 40 damage from each of your Grass Pokémon.",
				fr: "Soignez 40 dégâts à chacun de vos Pokémon Grass.",
				es: "Cura 40 puntos de daño a cada uno de tus Pokémon Grass.",
				it: "Cura ciascuno dei tuoi Pokémon Grass da 40 danni.",
				pt: "Cure 40 de danos de cada um dos seus Pokémon Grass.",
				de: "Heile 40 Schadenspunkte bei jedem deiner Grass-Pokémon."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flog",
				fr: "Martinet",
				es: "Azotar",
				it: "Scudiscio",
				pt: "Fustigar",
				de: "Auspeitscher"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "110+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 291509
	}
}

export default card
