import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
		es: "Bibarel",
		it: "Bibarel",
		pt: "Bibarel",
		de: "Bidifas"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
		de: "Bidiza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon ciblé ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon. Das Pokémon kann den gewählten Angriff während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumbling Tackle",
				fr: "Tacle Titubant",
				de: "Taumeltackle"
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis.",
				de: "Dieses Pokémon und das Verteidigende Pokémon schlafen jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "A river dammed by Bibarel will never overflow its banks, which is appreciated by the people nearby.",
		de: "Ein von Bidifas eingedämmter Fluss tritt niemals über seine Ufer. Dafür sind die Anrainer dankbar."
	},

	thirdParty: {
		cardmarket: 280546,
		tcgplayer: 83821
	}
}

export default card
