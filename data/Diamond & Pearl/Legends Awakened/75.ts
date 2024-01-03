import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		de: "Tentoxa"
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
		en: "Tentacool",
		fr: "Tentacha",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Tentacle Strike",
				fr: "Coup de tentacule",
				de: "Tentakelschlag"
			},
			effect: {
				en: "Search your opponent's discard pile for up to 2 Energy cards and attach them to any of your opponent's Pokémon in any way you like. For each Energy card attached in this way, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez dans la pile de défausse de votre adversaire jusqu'à 2 cartes Énergie et attachez-les à n'importe lequel des Pokémon de votre adversaire de la façon que vous voulez. Pour chaque carte Énergie attachée de cette façon, cette attaque inflige 20 dégâts au Pokémon correspondant. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Durchsuche den Ablagestapel deines Gegners nach bis zu 2 Energiekarten und lege sie in beliebiger Verteilung an Pokémon deines Gegners an. Für jede Energiekarte, die auf diese Weise angelegt wurde, fügt dieser Angriff dem betreffenden Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Poison",
				fr: "Poison dangeureux",
				de: "Gefährliches Gift"
			},
			effect: {
				en: "If Tentacruel has less Energy attached to it than the Defending Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Si Tentacruel possède moins d'Énergie que le Pokémon Défenseur, celui-ci est maintenant Paralysé et Empoisonné.",
				de: "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Tentoxa, ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
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
		fr: "Ses 80 tentacules ligotent ses proies et les retiennent jusqu'à ce que son poison fasse effet."
	}
}

export default card
