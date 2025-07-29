import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "White Smoke",
				fr: "Écran fumée",
				de: "Pulverrauch"
			},
			effect: {
				en: "As long as Torkoal is your Active Pokémon, prevent all effects, including damage, done to your Benched Pokémon by your opponent's attacks.",
				fr: "Tant que Chartor est votre Pokémon Actif, prévenez tous les effets d'une attaque, dégâts inclus, infligés à vos Pokémon de Banc par des attaques de votre adversaire.",
				de: "Solange Qurtel dein Aktives Pokémon ist, verhindere alle Effekte von Angriffen, einschließlich Schaden, die den Pokémon auf deiner Bank von Pokémon deines Gegners zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Black Soot",
				fr: "Suie noire",
				de: "Rußschwärze"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned and Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé et Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt und gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il tire son énergie du charbon qu'il brûle dans sa carapace et crache de la suie noire en cas de danger."
	},

	thirdParty: {
		cardmarket: 278190
	}
}

export default card
