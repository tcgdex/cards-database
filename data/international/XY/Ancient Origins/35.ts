import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Double Type",
				'fr-fr': "Type Double",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'en-us': "As long as this Pokémon is in play, it is Psychic and Fighting type.",
				'fr-fr': "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
				'es-es': "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
				'it-it': "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
				'pt-br': "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
				'de-de': "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Superpower",
				'fr-fr': "Surpuissance",
				'es-es': "Fuerza Bruta",
				'it-it': "Troppoforte",
				'pt-br': "Superpoder",
				'de-de': "Kraftkoloss"
			},
			effect: {
				'en-us': "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Puedes hacer 40 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 40 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Você pode causar 40 de danos adicionais. Se você fizer isso, o Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 40 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "80+",

		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It flies across the sky at Mach speeds. Removing the seal on its chest makes its internal energy go out of control.",
	},

	thirdParty: {
		cardmarket: 284216,
		tcgplayer: 101458
	}
}

export default card
