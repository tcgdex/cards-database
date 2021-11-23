import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine"
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		416,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Dignity",
				fr: "Dignité verte",
			},
			effect: {
				en: "As long as you have more Prize cards left than your opponent, Vespiquen's attacks do 10 more damage for each Grass Pokémon on your Bench to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Tant qu'il vous reste plus de cartes Récompense que votre adversaire, les attaques d'Apireine inflige 10 dégâts supplémentaires au Pokémon Actif pour chaque Pokémon Grass sur votre Banc (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bee Drain",
				fr: "Abeille épuisante",
			},
			effect: {
				en: "After your attack, remove from Vespiquen the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Après votre attaque, retirez à Apireine autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bee Powder",
				fr: "Poudre-abeille",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Burned, Paralyzed, and Poisoned.",
				fr: "Lancez 2 pièces. Si ce sont deux faces, le Pokémon Défenseur est maintenant Brûlé, Paralysé et Empoisonné.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
