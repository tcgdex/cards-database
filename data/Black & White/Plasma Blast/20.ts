import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		es: "Suicune",
		it: "Suicune",
		pt: "Suicune",
		de: "Suicune"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Safeguard",
				fr: "Rune Protect",
				es: "Velo Sagrado",
				it: "Salvaguardia",
				pt: "Salvaguarda",
				de: "Bodyguard"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
				fr: "Évitez tous les effets d’attaques (y compris les dégâts) infligés à ce Pokémon par des Pokémon-EX.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por Pokémon-EX.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da Pokémon-EX.",
				pt: "Impede todos os efeitos de ataques, inclusive danos, causados a este Pokémon por Pokémon-EX.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Pokémon-EX zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281041
	}
}

export default card
