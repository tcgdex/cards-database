import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		de: "Roserade"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Giftstachel"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spike Whip",
				fr: "Fouet à clou",
				de: "Stachelpeitsche"
			},
			effect: {
				en: "If Budew is anywhere under Roserade, choose 1 of your opponent's Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Rozbouton se trouve sous Roserade, choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wenn Knospi sich an beliebiger Stelle unter Roserade befindet, wähle 1 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	retreat: 1,

	description: {
		fr: "Il attire ses proies avec son doux parfum et les achève grâce aux fouets d'épines de ses bras."
	},

	thirdParty: {
		cardmarket: 277512,
		tcgplayer: 88826
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
