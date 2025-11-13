import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Buried Fossil",
		de: "Vergrabenes Fossil"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reconstruction",
				de: "Nachbildung"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a basic Energy card in your hand, you may search your deck for an Omanyte or Kabuto card, show it to your opponent, and put it into your hand. Then put a basic Energy card from your hand into your deck. Shuffle your deck afterward.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls du eine Basis-Energiekarte auf deiner Hand hast, dein Deck nach einer Amonitas oder Kabuto-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Lege dann eine Basis-Energiekarte aus deiner hand in dein Deck. Mische dein Deck danach."
			},
		},
	],

	thirdParty: {
		cardmarket: 275305,
		tcgplayer: 84048
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
