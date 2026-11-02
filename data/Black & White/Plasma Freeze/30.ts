import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call Sign",
				fr: "Signe d’Appel",
				de: "Rufzeichen"
			},
			effect: {
				en: "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 {W}-Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cryofreeze",
				fr: "Cryogel",
				de: "Kryofrost"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Das Verteidigende Pokémon kann während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148° F.",
		de: "Es fängt seine Beute mit Ketten aus Eiskristallen und kühlt sie auf eine Temperatur von minus 100 Grad ab."
	},

	thirdParty: {
		cardmarket: 280908,
		tcgplayer: 84515
	}
}

export default card
