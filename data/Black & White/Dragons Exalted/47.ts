import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
		es: "Dustox",
		it: "Dustox",
		pt: "Dustox",
		de: "Pudox"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hazardous Scales",
				fr: "Écailles Fatales",
				de: "Gefährliche Schuppen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep, Burned, and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
				de: "Das Verteidigende Pokémon schläft jetzt, ist verbrannt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
				fr: "Aéropique",
				de: "Aero-Ass"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
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

	description: {
		en: "Toxic powder is scattered with each flap. At night, it is known to strip leaves off trees lining boulevards.",
		de: "Es streut mit jedem Flügelschlag giftiges Pulver. Nachts entfernt es die Blätter von Bäumen an Alleen."
	},

	thirdParty: {
		cardmarket: 280486,
		tcgplayer: 85059
	}
}

export default card
