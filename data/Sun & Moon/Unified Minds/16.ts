import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lurantis",
		fr: "Floramantis",
		es: "Lurantis",
		it: "Lurantis",
		pt: "Lurantis",
		de: "Mantidea"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		754,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Petal Blizzard",
				fr: "Tempête Florale",
				es: "Tormenta Floral",
				it: "Fiortempesta",
				pt: "Nevasca de Pétalas",
				de: "Blütenwirbel"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sol Slice",
				fr: "Tranche-Soleil",
				es: "Tajo Sol",
				it: "Sferzata Solare",
				pt: "Talho Solar",
				de: "Solarschnitt"
			},
			effect: {
				en: "If this Pokémon has any Fire Energy attached to it, this attack does 50 more damage.",
				fr: "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 387912
	}
}

export default card
