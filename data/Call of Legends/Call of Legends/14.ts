import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario"
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dimension Sphere",
				fr: "Sphère dimensionnelle",
				de: "Dimensiossphäre"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each of your Pokémon in the Lost Zone.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chacun de vos Pokémon se trouvant dans la Zone Perdue.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jedes deiner Pokémon im Nirgendwo zu."
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
				en: "Sky Uppercut",
				fr: "Stratopercut",
				de: "Himmelhieb"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angrffs wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
