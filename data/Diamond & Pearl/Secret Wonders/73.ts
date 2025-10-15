import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
		de: "Omot"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dangerous Scales",
				fr: "Écailles dangereuses",
				de: "Schadende Schuppen"
			},
			effect: {
				en: "If Venomoth is your Active Pokémon and is damaged by an opponent's attack (even if Venomoth is Knocked Out), the Attacking Pokémon is now Asleep and Poisoned.",
				fr: "Si Aéromite est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Aéromite est mis K.O), le Pokémon Attaquant est maintenant Endormi et Empoisonné.",
				de: "Wenn Omot dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Omot dadurch kampfunfähig wird), schläft das Angreifende Pokémon jetzt und ist vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Disturbance Dive",
				fr: "Plongeon perturbant",
				de: "Abwehrsturzflug"
			},
			effect: {
				en: "Prevent all effects of an attack, excluding damage, done to Venomoth during your opponent's next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Aéromite lors du prochain tour de votre adversaire.",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, außer Schaden, die Omot zugefügt würden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277826,
		tcgplayer: 90302
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
