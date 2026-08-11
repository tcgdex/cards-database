import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacha",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Tentacle Strike",
				'fr-fr': "Coup de tentacule",
				'de-de': "Tentakelschlag"
			},
			effect: {
				'en-us': "Search your opponent's discard pile for up to 2 Energy cards and attach them to any of your opponent's Pokémon in any way you like. For each Energy card attached in this way, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez dans la pile de défausse de votre adversaire jusqu'à 2 cartes Énergie et attachez-les à n'importe lequel des Pokémon de votre adversaire de la façon que vous voulez. Pour chaque carte Énergie attachée de cette façon, cette attaque inflige 20 dégâts au Pokémon correspondant. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Durchsuche den Ablagestapel deines Gegners nach bis zu 2 Energiekarten und lege sie in beliebiger Verteilung an Pokémon deines Gegners an. Für jede Energiekarte, die auf diese Weise angelegt wurde, fügt dieser Angriff dem betreffenden Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dangerous Poison",
				'fr-fr': "Poison dangeureux",
				'de-de': "Gefährliches Gift"
			},
			effect: {
				'en-us': "If Tentacruel has less Energy attached to it than the Defending Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
				'fr-fr': "Si Tentacruel possède moins d'Énergie que le Pokémon Défenseur, celui-ci est maintenant Paralysé et Empoisonné.",
				'de-de': "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Tentoxa, ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With 80 tentacles for ensnaring victims, it prevents escape until the prey is weakened by poison.",
		'fr-fr': "Ses 80 tentacules ligotent ses proies et les retiennent jusqu'à ce que son poison fasse effet."
	},

	thirdParty: {
		cardmarket: 278224,
		tcgplayer: 89877
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
