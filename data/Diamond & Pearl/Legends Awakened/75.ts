import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
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
			},
			effect: {
				en: "Search your opponent's discard pile for up to 2 Energy cards and attach them to any of your opponent's Pokémon in any way you like. For each Energy card attached in this way, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez dans la pile de défausse de votre adversaire jusqu'à 2 cartes Énergie et attachez-les à n'importe lequel des Pokémon de votre adversaire de la façon que vous voulez. Pour chaque carte Énergie attachée de cette façon, cette attaque inflige 20 dégâts au Pokémon correspondant. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
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
			},
			effect: {
				en: "If Tentacruel has less Energy attached to it than the Defending Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Si Tentacruel possède moins d'Énergie que le Pokémon Défenseur, celui-ci est maintenant Paralysé et Empoisonné.",
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



}

export default card
