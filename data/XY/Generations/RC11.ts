import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		de: "Woingenau"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bide Barricade",
				fr: "Épreuve d'Endurance",
				de: "Sperrzeit"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities (except for Psychic Pokémon).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chacun des Pokémon en jeu, dans la main de chaque joueur et dans la pile de défausse de chaque joueur, n'a pas de talent (à part les Pokémon Psychic).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, hat jedes Pokémon im Spiel, in der Hand beider Spieler oder im Ablagestapel beider Spieler keine Fähigkeit (außer {P}-Pokémon)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Assault",
				fr: "Assaut Psychique",
				de: "Psycho-Ansturm"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners zu."
			},
			damage: "10+",

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
		en: "When she's surrounded by cushions and dressers that I like, she looks just like a princess!",
		de: "Wenn sie von Kissen und Kommoden umgeben ist, die ich toll finde, dann sieht sie wie eine Prinzessin aus!"
	},

	thirdParty: {
		cardmarket: 288520
	}
}

export default card
