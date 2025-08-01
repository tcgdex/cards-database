import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		741,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Zappy Pom-Poms",
				fr: "Pom-Poms Électrisants",
				es: "Sacudida Pompón",
				it: "Pompon Elettrizzanti",
				pt: "Pompons Fulminantes",
				de: "Geladene Pompons"
			},
			effect: {
				en: "This attack does 30 damage to each Pokémon-GX and Pokémon-EX (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chaque Pokémon-GX et Pokémon-EX (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada Pokémon-GX y Pokémon-EX (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascun Pokémon-GX e Pokémon-EX, sia tuo che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon-GX e Pokémon-EX (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Diese Attacke fügt jedem Pokémon-GX und Pokémon-EX (deinen und denen deines Gegners) 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
				es: "Bola Eléctrica",
				it: "Lamposfera",
				pt: "Bola de Eletricidade",
				de: "Stromball"
			},

			damage: 70,

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
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361277
	}
}

export default card
