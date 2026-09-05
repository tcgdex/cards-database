import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali",
		es: "Leafeon",
		it: "Leafeon",
		pt: "Leafeon",
		de: "Folipurba"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Crush",
				fr: "Écras'Énergie",
				de: "Zermalmende Energie"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to all of your opponent's Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon de votre adversaire.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an allen Pokémon deines Gegners angelegten Energien zu."
			},
			damage: 20,

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
				de: "Laubklinge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "With cells similar to those of plants, it performs photosynthesis inside its body and creates pure air.",
		de: "Da seine Zellstruktur der von Pflanzen gleicht, kann sein Körper Photosynthese betreiben und saubere Luft erzeugen."
	},

	thirdParty: {
		cardmarket: 280889,
		tcgplayer: 86683
	}
}

export default card
