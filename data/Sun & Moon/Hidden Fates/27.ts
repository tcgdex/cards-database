import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		de: "Arbok"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
		de: "Rettan"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Last Pattern",
				fr: "Dernier Motif",
				de: "Letztes Muster"
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an opponent’s attack, discard 2 random cards from your opponent’s hand.",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, défaussez 2 cartes au hasard de la main de votre adversaire.",
				de: "Wenn dieses Pokémon durch Schaden einer Attacke deines Gegners kampfunfähig wird, lege 2 zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Tail",
				fr: "Queue Rocket",
				de: "Rocket-Schweif"
			},
			effect: {
				en: "If Jessie & James is in your discard pile, this attack does 80 more damage.",
				fr: "Si la carte Jessie et James est dans votre pile de défausse, cette attaque inflige 80 dégâts supplémentaires.",
				de: "Wenn sich Jessie & James in deinem Ablagestapel befindet, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.",
		de: "Jüngsten Forschungsergebnissen zufolge gibt es mehr als 20 verschiedene Musterungen, die Arboks Bauch aufweisen kann."
	},

	thirdParty: {
		cardmarket: 381231,
		tcgplayer: 197671
	}
}

export default card
