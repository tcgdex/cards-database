import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lurantis",
		'fr-fr': "Floramantis",
		'es-es': "Lurantis",
		'it-it': "Lurantis",
		'pt-br': "Lurantis",
		'de-de': "Mantidea"
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
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Petal Blizzard",
				'fr-fr': "Tempête Florale",
				'es-es': "Tormenta Floral",
				'it-it': "Fiortempesta",
				'pt-br': "Nevasca de Pétalas",
				'de-de': "Blütenwirbel"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sol Slice",
				'fr-fr': "Tranche-Soleil",
				'es-es': "Tajo Sol",
				'it-it': "Sferzata Solare",
				'pt-br': "Talho Solar",
				'de-de': "Solarschnitt"
			},
			effect: {
				'en-us': "If this Pokémon has any Fire Energy attached to it, this attack does 50 more damage.",
				'fr-fr': "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Fire ligada a ele, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "For self-protection, it pretends to be a bug Pokémon. Both of its arms bear keen-edged petals.",
	},

	thirdParty: {
		cardmarket: 387912,
		tcgplayer: 194932
	}
}

export default card
