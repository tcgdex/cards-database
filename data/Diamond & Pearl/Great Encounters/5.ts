import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		de: "Pachirisu"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 Pokémon de Base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smash Short",
				fr: "Smash court",
				de: "Zerschmettern"
			},
			effect: {
				en: "If the Defending Pokémon has a Pokémon Tool card attached to it, this attack does 10 damage plus 30 more damage. Discard that Pokémon Tool card, look at your opponent's hand, and discard any Pokémon Tool cards of the same name you find there.",
				fr: "Si le Pokémon Défenseur possède une carte Outil Pokémon, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte Outil Pokémon, regardez la main de votre adversaire et défaussez les cartes Outil Pokémon du même nom se trouvant dans sa main.",
				de: "Wenn am Verteidigenden Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu. Entferne diese Pokémon-Ausrüstung vom Verteidigenden Pokémon und lege sie auf den Ablagestapel, danach schau dir die Handkarten deines Gegners an und lege jede Pokémon-Ausrüstungs-Karte desselben Namens auf den Ablagestapel."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277907,
		tcgplayer: 87899
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
