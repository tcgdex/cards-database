import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		de: "Giflor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Allergy Flower",
				fr: "Fleur allergène",
				de: "Allergieblume"
			},
			effect: {
				en: "Each player can’t play any Trainer cards from his or her hand.",
				fr: "Aucun joueur ne peut jouer de carte Dresseur de sa main.",
				de: "Kein Spieler darf Trainerkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dazzling Pollen",
				fr: "Pollen étincelant",
				de: "Verwirrpollen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage. If tails, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires. Si c’est pile, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279277
	}
}

export default card
