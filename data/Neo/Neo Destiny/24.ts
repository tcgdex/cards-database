import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Ledian",
		fr: "Coxyclaque lumineux",
		de: "Helles Ledian"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ledyba",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Flash Touch",
				fr: "Contact flash",
				de: "Blitzberührung"
			},
			effect: {
				en: "If you have any Benched Pokémon, switch 1 of them with Light Ledian. As long as that Pokémon is your Active Pokémon, it can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)",
				fr: "Si vous avez des Pokémon sur votre Banc, échangez l'un d'eux contre Coxyclaque lumineux. Tant que ce Pokémon est votre Pokémon Actif, il ne peut pas devenir Endormi, Confus, Paralysé ou Empoisonné. (Tous les autres effets d'attaques, Pouvoir Pokémon et cartes Dresseur sont toujours actifs.)",
				de: "Falls du mindestens ein Pokémon auf deiner Bank hast, tausche eines von diesen mit Helles Ledian. Solange dieses Pokémon dein Aktives Pokémon ist, kann es nicht schlafen, verwirrt, gelähmt oder vergiftet sein. (Alle anderen Effekte von Angriffen, Pokémon-Powers und Trainerkarten finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Comet Punch",
				fr: "Poing comète",
				de: "Kometenhieb"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Le nombre de taches sur son dos augmente ou diminue en fonction du nombre d'étoiles visibles dans le ciel nocturne."
	},

	thirdParty: {
		cardmarket: 274676
	}
}

export default card
