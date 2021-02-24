import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Rowlet & Alolan Exeggutor-GX",
		fr: "Brindibou et Noadkoko d’Alola-GX",
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 270,
	types: [
		"Grass",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{

			name: {
				en: "Super Growth",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Grass Pokémon and put it onto that Pokémon to evolve it. If that Pokémon is now a Stage 1 Pokémon, search your deck for a Stage 2 Pokémon that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Calming Hurricane",
				fr: "Super Croissance",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon Grass et placez-la sur ce dernier pour le faire évoluer. Si ce Pokémon est maintenant un Pokémon de Niveau 1, cherchez dans votre deck un Pokémon de Niveau 2 qui est l’Évolution de ce Pokémon et placez-le sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			},
			damage: 150,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Tropical Hour-GX",
				fr: "Ouragan Apaisant",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack's cost), your opponent shuffles all Energy from all of their Pokémon into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 200,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				fr: "Pause Tropicale-GX",
			},
			effect: {
				fr: "Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange toutes les Énergies de tous ses Pokémon avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
