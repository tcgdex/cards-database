import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Basculin",
		fr: "Bargantua",
		es: "Basculin",
		it: "Basculin",
		pt: "Basculin",
		de: "Barschuft"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				de: "Knirscher"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Lege bei „Kopf“ 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Red and blue Basculin get along so poorly, they'll start fighting instantly. These Pokémon are very hostile.",
		de: "Rot gestreifte und blau gestreifte Exemplare kriegen sich sofort in die Haare. Ein äußerst aggressives Pokémon."
	},

	thirdParty: {
		cardmarket: 279773,
		tcgplayer: 83730
	}
}

export default card
