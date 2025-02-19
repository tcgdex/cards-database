import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
		de: "Charmian"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		431,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	level: 15,
	weight: 3.9,
	height: 0.5,

	retreat: 1,

	attacks: [{
		name: {
			en: 'Call for Family',
			fr: 'Appel à la famille',
			de: "Familienruf"
		},

		effect: {
			fr: 'Choisissez dans votre deck un Pokémon de base et placez-le sur botre Banc. Ensuite, mélangez votre deck.',
			en: 'Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward',
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf diene Bank. Mische dein Deck danach."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: 'Rip Claw',
			fr: 'Griffe déchirante',
			de: "Reißklaue"
		},

		damage: 10,

		effect: {
			fr: "Lancez une pièce, Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			en: 'Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.',
			de: "Wirf 1 Münze. Bei 'Kopf' entferne 1 Energie, die an das Verteidigende Pokémon angelegt ist, und lege sie auf den Ablagestapel deines Gegners."
		},

		cost: ["Colorless", "Colorless"]
	}]
}

export default card
