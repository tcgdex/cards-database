import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [527],
	name: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat",
		de: "Fleknoil"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Unamplified Soundwave",
				fr: "Onde Sonore Étouffée",
				es: "Onda Sonora Amortiguada",
				it: "Onda Attenuata",
				pt: "Onda Acústica",
				de: "Unverstärkte Schallwelle"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If you have any cards in your hand, this attack does nothing.",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Si vous avez au moins une carte dans votre main, cette attaque ne fait rien.",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). Si tienes alguna carta en tu mano, este ataque no hace nada.",
				it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina. Se hai delle carte in mano, questo attacco non ha effetto.",
				pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). Se você tiver alguma carta na sua mão, este ataque não fará nada.",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wenn du mindestens 1 Karte auf deiner Hand hast, hat diese Attacke keine Auswirkungen."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it's evidence that Woobat live there."
	}
}

export default card
