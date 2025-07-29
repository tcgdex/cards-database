import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
		es: "Gogoat",
		it: "Gogoat",
		pt: "Gogoat",
		de: "Chevrumm"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sap Sipper",
				fr: "Herbivore",
				es: "Herbívoro",
				it: "Mangiaerba",
				pt: "Engolidor de Seiva",
				de: "Vegetarier"
			},
			effect: {
				en: "This Pokémon’s attacks do 80 more damage to your opponent’s Grass Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de ce Pokémon infligent 80 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de este Pokémon hacen 80 puntos de daño más a los Pokémon Grass de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi di questo Pokémon infliggono 80 danni in più ai Pokémon Grass del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques deste Pokémon causam 80 pontos de dano a mais aos Pokémon Grass do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Die Attacken dieses Pokémon fügen den Grass-Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Leech",
				fr: "Encornebois",
				es: "Asta Drenaje",
				it: "Legnicorno",
				pt: "Chifre Sugador",
				de: "Holzgeweih"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 311861
	}
}

export default card
