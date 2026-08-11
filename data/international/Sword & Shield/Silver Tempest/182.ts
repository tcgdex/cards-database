import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [801],
	set: Set,

	name: {
		'en-us': "Magearna V",
		'fr-fr': "Magearna V",
		'es-es': "Magearna V",
		'it-it': "Magearna V",
		'pt-br': "Magearna V",
		'de-de': "Magearna V"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Gear Throw",
			'fr-fr': "Jet d'Engrenage",
			'es-es': "Lanzamiento Engranaje",
			'it-it': "Lancio Meccanico",
			'pt-br': "Arremesso de Engrenagem",
			'de-de': "Getriebewurf"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

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

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682229,
				tcgplayer: 451830
			}
		},
	],
}

export default card
