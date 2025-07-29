import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'énergie",
				de: "Energiereflektion"
			},
			effect: {
				en: "If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
				fr: "Si vous avez des Pokémon sur votre Banc et s'il y a des cartes Énergie de base attachées à Pharamp, prenez une de ces cartes Énergie et attachez-la à l'un de ces Pokémon.",
				de: "Falls du mindestens ein Pokémon auf deiner Bank hast und mindestens eine Basis-Energiekarte an Ampharos angelegt ist, nimm 1 dieser Energiekarten und lege sie an 1 dieser Pokémon an."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275052
	}
}

export default card
