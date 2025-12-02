import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 160,

	types: ["Dragon"],

	stage: "Stage2",

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},

	attacks: [
		{
			cost: ["Water", "Lightning"],
			name: {
				en: "Dragon Claw",
				fr: "Draco-Griffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},
			damage: 70,
		},
		{
			cost: ["Water", "Lightning", "Colorless"],
			name: {
				en: "Draco Meteor",
				fr: "Draco Météore",
				es: "Cometa Draco",
				it: "Dragobolide",
				pt: "Draco Meteoro",
				de: "Draco Meteor"
			},
			damage: "50×",
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia quattro monete. Questo attacco infligge 50 danni per ogni testa.",
				pt: "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte für jede Kopf-Münze zu."
			},
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

