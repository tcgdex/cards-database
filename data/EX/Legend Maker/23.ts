import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		de: "Amoroso"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Fang",
				fr: "Croc ancien",
				de: "Uralte Fangzähne"
			},
			effect: {
				en: "As long as you have Kabuto, Kabutops, or Kabutops ex in play, Omastar's attacks do 20 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que votre Kabuto, Kabutops ou Kabutops ex est en jeu, les attaques d'Amonistar infligent au Pokémon Défenseur 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Solange du Kabuto, Kabutops oder Kabutos ex im Spiel hast, fügen die Angriffe von Amoroso 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
				de: "Wegzerren"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				de: "Bevor der Schaden zugefügt wird, kannst du 1 Pokémon auf der Bank deines Gegners gegen das Verteidigende Pokémon austauschen. Dein Gegner entscheidet, welches Verteidigende Pokémon ausgetauscht wird."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-éclaboussure",
				de: "Hydroplatscher"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276900,
		tcgplayer: 87868
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
