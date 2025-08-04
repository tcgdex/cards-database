import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		de: "Rizeros"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Storm Up",
				fr: "La tempête se lève",
				de: "Losstürme"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 30 damage plus 20 more damage. Discard that Stadium card.",
				fr: "Si une carte Stade est en jeu, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Défaussez cette carte Stade.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu. Lege danach die Stadion-Karte auf den Ablagestapel."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crash Impact",
				fr: "Cratère",
				de: "Heftiger Zusammenstoß"
			},
			effect: {
				en: "Rhydon does 10 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Rhinoféros s'inflige 10 dégâts. Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
				de: "Rizeros fügt sich selbst 10 Schadenspunkte zu. Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Son cerveau s'est développé depuis qu'il tient debout. Sa corne peut traverser la pierre la plus dure."
	},

	thirdParty: {
		cardmarket: 277559,
		tcgplayer: 88734
	}
}

export default card
