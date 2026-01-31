import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
		de: "Meditalis"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Meditite",
		fr: "Meditikka"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Vigorous Aura",
				fr: "Aura énergique",
				de: "Kräftigende Aura"
			},
			effect: {
				en: "As long as Medicham is your Active Pokémon, attacks by each player's Active Pokémon do 10 more damage to any Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que Charmina est votre Pokémon Actif, les attaques des Pokémon Actifs de chaque joueur infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Meditalis dein Aktives Pokémon ist, fügen Angriffe aller Aktiven Pokémon beider Spieler den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Koud'poing",
				de: "Boxhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rolling Kick",
				fr: "Mawashi Geri",
				de: "Fegekick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277340,
		tcgplayer: 87274
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

