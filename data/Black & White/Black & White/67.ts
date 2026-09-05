import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		510,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
		de: "Felilou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Taunt",
				fr: "Provoc",
				de: "Verhöhner"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sucker Punch",
				fr: "Coup Bas",
				de: "Tiefschlag"
			},
			effect: {
				en: "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wenn an dieses Pokémon bereits mindestens 1 {D}-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.",
		de: "Verbirgt seine Aura und nähert sich seinem Gegner völlig unbemerkt von hinten, um ihm den Garaus zu machen."
	},

	thirdParty: {
		cardmarket: 279805,
		tcgplayer: 86725
	}
}

export default card
