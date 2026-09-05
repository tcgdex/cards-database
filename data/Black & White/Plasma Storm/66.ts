import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		569,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
		de: "Unratütox"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Biosmog",
				fr: "Brouillard Toxique",
				de: "Biosmog"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, discard an Energy attached to that Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Wirf 1 Münze. Lege bei „Kopf“ 1 an dieses Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Sludge Bomb",
				fr: "Bomb-Beurk",
				de: "Matschbombe"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Consuming garbage makes new kinds of poison gases and liquids inside their bodies.",
		de: "Jedes Mal, wenn es frischen Müll in sich aufsaugt, erzeugt es völlig neue Formen von Giftgasen und Toxinen."
	},

	thirdParty: {
		cardmarket: 280806,
		tcgplayer: 85619
	}
}

export default card
