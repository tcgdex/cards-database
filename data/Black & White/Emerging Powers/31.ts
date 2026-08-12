import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		614,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
		de: "Petznief"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
				de: "Eissturm"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Superpower",
				fr: "Surpuissance",
				de: "Kraftkoloss"
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				de: "Du kannst mit diesem Angriff 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
		de: "Kämpft mit Reißzähnen aus Eis, die es aus gefrorenem Atem herstellt. Es lebt im Norden, wo es kalt ist."
	},

	thirdParty: {
		cardmarket: 279995,
		tcgplayer: 83752
	}
}

export default card
