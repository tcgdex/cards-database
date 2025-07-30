import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		de: "Scherox"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Special Blow",
				fr: "Coup spécial",
				de: "Spezialschlag"
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie Spéciale, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires.",
				de: "Wenn am Verteidigendem Pokémon mindestens 1 Spezialenergiekarte angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 50 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278078,
		tcgplayer: 88961
	}
}

export default card
