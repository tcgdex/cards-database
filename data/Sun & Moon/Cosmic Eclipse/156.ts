import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Arceus & Dialga & Palkia-GX",
		fr: "Arceus, Dialga et Palkia-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 280,
	types: [
		"Dragon",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Ultimate Ray",
				fr: "Rayon Ultime",
			},
			effect: {
				en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},
			damage: 150,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Altered Creation-GX",
				fr: "Création Altérée-GX",
			},
			effect: {
				en: "For the rest of this game, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). If this Pokémon has at least 1 extra Water Energy attached to it (in addition to this attack's cost), when your opponent's Active Pokémon is Knocked Out by damage from those attacks, take 1 more Prize card. (You can't use more than 1 GX attack in a game.)",
				fr: "Pour le reste de cette partie, les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Si au moins une Énergie Water supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), lorsque le Pokémon Actif de votre adversaire est mis K.O. par les dégâts de ces attaques, récupérez une carte Récompense supplémentaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
