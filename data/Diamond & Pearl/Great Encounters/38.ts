import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
		de: "Saganabyss"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Sweet Temptation",
				fr: "Douce tentation",
				de: "Süße Versuchung"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This attack does 10 damage to the new Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Cette attaque inflige 10 dégâts au nouveau Pokémon Défenseur.",
				de: "Tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Dieser Angriff fügt dem neuen Verteidigenden Pokémon 10 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Psychic Snap",
				fr: "Claquement psy",
				de: "Psychoschnapper"
			},
			effect: {
				en: "If Gorebyss has any Psychic Energy attached to it, this attack does 30 damage plus 20 more damage and the Defending Pokémon is now Confused.",
				fr: "Si Rosabyss possède de l'Énergie Psychic, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn an Saganabyss mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 277940,
		tcgplayer: 85844
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
