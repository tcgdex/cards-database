import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [800],
	set: Set,

	name: {
		'en-us': "Necrozma V",
		'fr-fr': "Necrozma V",
		'es-es': "Necrozma V",
		'it-it': "Necrozma V",
		'pt-br': "Necrozma V",
		'de-de': "Necrozma V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Prismatic Ray",
			'fr-fr': "Rayon Prismatique",
			'es-es': "Rayo Prismático",
			'it-it': "Raggio Prismatico",
			'pt-br': "Raio Prismático",
			'de-de': "Prisma-Strahl"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Special Laser",
			'fr-fr': "Laser Spécial",
			'es-es': "Láser Especial",
			'it-it': "Laser Speciale",
			'pt-br': "Laser Especial",
			'de-de': "Spezial-Laser"
		},

		effect: {
			'en-us': "If this Pokémon has any Special Energy attached, this attack does 120 more damage.",
			'fr-fr': "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 120 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545426,
				tcgplayer: 234237
			}
		},
	],
}

export default card
