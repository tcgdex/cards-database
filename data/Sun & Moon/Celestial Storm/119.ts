import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
		es: "Exploud",
		it: "Exploud",
		pt: "Exploud",
		de: "Krawumms"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Concert",
				fr: "Concert Risqué",
				es: "Concierto Peligroso",
				it: "Concerto Micidiale",
				pt: "Espetáculo Perigoso",
				de: "Gefährliches Konzert"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent’s Benched Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascun Pokémon nella panchina del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
				es: "Impacto Pesado",
				it: "Impatto Pesante",
				pt: "Impacto Pesado",
				de: "Schwerer Einschlag"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 361358,
		tcgplayer: 170977
	}
}

export default card
