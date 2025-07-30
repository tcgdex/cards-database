import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
		es: "Aerodactyl",
		it: "Aerodactyl",
		pt: "Aerodactyl",
		de: "Aerodactyl"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ancient Scream",
				fr: "Cri Préhistorique",
				es: "Grito Prehistórico",
				it: "Urloantico",
				pt: "Grito Ancestral",
				de: "Urzeitschrei"
			},
			effect: {
				en: "Your Pokémon’s attacks do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon hacen 10 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Pokémon infliggono 10 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques do seu Pokémon causam 10 de danos extras ao Pokémon Ativo (antes de aplicar Fraqueza e Resistência).",
				de: "Die Angriffe deiner Pokémon fügen den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280381,
		tcgplayer: 83471
	}
}

export default card
