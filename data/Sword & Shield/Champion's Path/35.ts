import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [263],

	name: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar",
		es: "Zigzagoon de Galar",
		it: "Zigzagoon di Galar",
		pt: "Zigzagoon de Galar",
		de: "Galar-Zigzachs"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
				es: "Pin Misil",
				it: "Missilspillo",
				pt: "Míssil de Espinhos",
				de: "Nadelrakete"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
				es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
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
	},

	stage: "Basic",

	description: {
		en: "Its restlessness has it constantly running around. If it sees another Pokémon, it will purposely run into them in order to start a fight."
	},

	thirdParty: {
		cardmarket: 500030,
		tcgplayer: 223027
	}
}

export default card
