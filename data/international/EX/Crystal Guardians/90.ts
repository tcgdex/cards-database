import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Blaziken ex",
		'fr-fr': "Brasegali ex",
		'de-de': "Lohgock ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pok��mon to switch.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Bevor der Schaden zugefügt wird, kannst du 1 Pokémon auf der Bank deines Gegners gegen das Verteidigende Pokémon austauschen. Dein Gegner entscheidet, welches Verteidigende Pokémon ausgetauscht wird."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burn Away",
				'fr-fr': "Grosse brûlure",
				'de-de': "Verbrennen"
			},
			effect: {
				'en-us': "Before doing damage, count the remaining HP of the Defending Pokémon. If that Pokémon is Knocked Out by this attack, Blaziken ex does damage to itself equal to this attack's damage minus the remaining HP of the Defending Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, comptabilisez le nombre de Points de vie restant au Pokémon Défenseur. Si ce Pokémon est mis K.O par cette attaque, Brasegali ex s'inflige autant de dégâts que les dégâts de cette attaque moins les Points de vie restant au Pokémon Défenseur. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				'de-de': "Bevor der Schaden zugefügt wird, zähle die verbliebenen KP des Verteidigenden Pokémon. Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig wird, fügt sich Lohgock ex Schadenspunkte in Höhe der Differenz aus den Schadenspunkten dieses Angriffs und den verbliebenen KP zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277171,
		tcgplayer: 83913
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
