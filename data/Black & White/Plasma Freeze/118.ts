import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		561,
	],
	hp: 90,
	types: [
		"Psychic",
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
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "Does 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
