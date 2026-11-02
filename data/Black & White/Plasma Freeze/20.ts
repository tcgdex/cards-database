import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Refreshing Rain",
				fr: "Ondée Rafraîchissante",
				de: "Erquicklicher Regen"
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Gold Breaker",
				fr: "Goliastruction",
				de: "Goldbrecher"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, this attack does 50 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein Pokémon-EX ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its cell composition is similar to water molecules. As a result, it can't be seen when it melts away into water.",
		de: "Seine Zellstruktur ist der von Wassermolekülen ähnlich. Daher kann es mit Wasser eins werden."
	},

	thirdParty: {
		cardmarket: 280898,
		tcgplayer: 90291
	}
}

export default card
