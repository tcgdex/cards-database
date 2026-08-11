import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
		de: "Kramshef"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	stage: "LEVEL-UP",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Finte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Wing",
				fr: "Battement obscur",
				de: "Dunkelschwinge"
			},
			effect: {
				en: "If the Defending Pokémon would be Knocked Out by damage from this attack, you may search your discard pile for any 1 card, show it to your opponent, and put it into your hand.",
				fr: "Si les dégâts de cette attaque mettent K.O le Pokémon Défenseur, vous pouvez choisir n'importe quelle carte dans votre pile de défausse. Montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Wenn das Verteidigende Pokémon durch Schaden dieses Angriffs kampfunfähig würde, kannst du deinen Ablagestapel nach 1 Karte durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 277885,
		tcgplayer: 86165
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
