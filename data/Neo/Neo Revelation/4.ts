import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
		de: "Iksbat"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
		de: "Golbat"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				en: "Triggered Poison",
				fr: "Poison à retardement",
				de: "Wartendes Gift"
			},

			effect: {
				en: "If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned.",
				fr: "Si votre adversaire attache une carte Énergie au Pokémon Défenseur durant son prochain tour, ce Pokémon devient Empoisonné.",
				de: "Wenn dein Gegner in seinem nächsten Zug eine Energiekarte an das verteidigende Pokémon anlegt, wird dieses Pokémon vergiftet."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cross Attack",
				fr: "Attaque croisée",
				de: "Überkreuztackle"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins deux faces, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf vier Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu. Wenn du dabei mindestens zweimal „Kopf“ erzielst, ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
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
		en: "It flies so silently through the dark on its four wings that it may not be noticed even when nearby.",
		fr: "Le battement de ses quatre ailes est si silencieux dans la nuit que personne ne remarque sa présence, même s'il est tout près.",
		de: "Es gleitet so geräuschlos auf seinen vier Flügeln durch die Dunkelheit, dass es oft selbst aus der Nähe nicht bemerkt wird."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274590,
				tcgplayer: 84482
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274590,
				tcgplayer: 84482
			}
		}
	]
}

export default card
