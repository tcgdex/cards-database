import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Damage Bind",
				fr: "Attache-dégâts",
				de: "Schadensfessel"
			},
			effect: {
				en: "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
				fr: "Chaque Pokémon possédant des marqueurs de dégâts (les vôtres et ceux de votre adversaire) ne peut pas utiliser de Poké-Powers.",
				de: "Pokémon (deine und die deines Gegners), auf denen mindestens 1 Schadensmarke liegt, können keine Poké-Power benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
				fr: "Gigavolt",
				de: "Gigavolt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'énergie",
				de: "Energiereflektion"
			},
			effect: {
				en: "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Pharamp sur 1 des Pokémon de votre Banc.",
				de: "Entferne 1 an Ampharos angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278422
	}
}

export default card
