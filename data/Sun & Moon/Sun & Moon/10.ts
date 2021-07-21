import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		723,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Blade Quill",
				fr: "Plum’acérée Tranchante",
				es: "Pluma Filo Afilado",
				it: "Piumaffilata Tagliente",
				pt: "Lâmina de Pluma Afiada",
				de: "Scharfe Flügelklinge"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-Feuille",
				es: "Hoja Aguda",
				it: "Fendifoglia",
				pt: "Lâmina de Folha",
				de: "Laubklinge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
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



}

export default card
