import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Nœufnœuf",
		de: "Owei"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnosis",
				fr: "Hypnose",
				de: "Hypnose"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon ist jetzt schlafend."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
				de: "Egelsamen"
			},
			effect: {
				en: "Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute.",
				fr: "À moins que tous les dégâts infligés par cette attaque ne soient prévenus, vous pouvez retirer 1 marqueur de dégâts de Nœufnœuf.",
				de: "Falls nicht aller Schaden von diesem Angriff verhindert wird, kannst du eine Schadensmarke von Owei entfernen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Souvent pris pour des œufs, ils attaquent en groupe comme un essaim."
	},

	thirdParty: {
		cardmarket: 273849,
		tcgplayer: 45155
	}
}

export default card
