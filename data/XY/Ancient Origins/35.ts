import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
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
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
				fr: "Type Double",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				en: "As long as this Pokémon is in play, it is Psychic and Fighting type.",
				fr: "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
				es: "{title}: Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
				it: "{title}: Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
				pt: "{title}: Impede todos os efeitos das Habilidades causadas neste Pokémon pelo Pokémon do seu oponente.",
				de: "{title}: Verhindere alle Effekte von Fähigkeiten gegnerischer Pokémon, die diesem Pokémon zugefügt werden."
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
				en: "Superpower",
				fr: "Surpuissance",
				es: "Fuerza Bruta",
				it: "Troppoforte",
				pt: "Superpoder",
				de: "Kraftkoloss"
			},
			effect: {
				en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				es: "Puedes hacer 40 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Puoi infliggere 40 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Você pode causar 40 de danos adicionais. Se você fizer isso, o Pokémon causará 20 de danos a ele mesmo.",
				de: "Du kannst mit diesem Angriff 40 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
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



}

export default card
