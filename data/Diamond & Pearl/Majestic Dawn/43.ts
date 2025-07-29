import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		de: "Pachirisu"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Trans Tail",
				fr: "Trans-queue",
				de: "Transferschweif"
			},
			effect: {
				en: "Search your discard pile for a Lightning Energy card, show it to your opponent, and put it into your hand.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie Fighting, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach 1 -Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278092
	}
}

export default card
