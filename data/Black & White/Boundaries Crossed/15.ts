import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		de: "Waumboll"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fluffy Tag",
				fr: "Accolade Duveteuse",
				de: "Schlummerschlag"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. During your next turn, the attacks of that Pokémon do 40 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Pendant votre prochain tour, les attaques du Pokémon échangé infligent 40 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Während deines nächsten Zuges fügen die Angriffe dieses Pokémon den Aktiven Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-Spore",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "They appear along with whirlwinds. They pull pranks, such as moving furniture and leaving balls of cotton in homes.",
		de: "Sie erscheinen mit Orkanböen und spielen den Leuten Streiche, indem sie in Häusern Möbel verrücken oder Watte verstreuen."
	},

	thirdParty: {
		cardmarket: 280602,
		tcgplayer: 90569
	}
}

export default card
