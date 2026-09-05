import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
		de: "Lunastein"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [337],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lunar Eclipse",
				fr: "Éclipse de lune",
				de: "Mondfinsternis"
			},
			effect: {
				en: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Solaroc est en jeu, vous pouvez utiliser ce pouvoir. Jusqu'à la fin de votre tour, Seleroc est {D}. Ce pouvoir ne peut pas être utilisé si Seleroc est affecté par un État Spécial.",
				de: "Du kannst diese Poké-Power einmal während deines Zuges (vor deinem Angriff) anwenden, falls sich Sonnfel im Spiel befindet. Bis zum Ende des Zuges erhält Lunastein den Typ {D}. Diese Poké-Power kann nicht verwendet werden, falls Lunastein von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cosmic Draw",
				fr: "Pioche cosmik",
				de: "Kosmische Anziehungskraft"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
				fr: "Si votre adversaire a un Pokémon Évolué en jeu, piochez trois cartes.",
				de: "Wenn dein Gegner mindestens ein entwickeltes Pokémon im Spiel hat, ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lunar Blast",
				fr: "Explosion lunaire",
				de: "Mondsturm"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275785,
				tcgplayer: 86923
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275785,
				tcgplayer: 86923
			}
		},
	],

}

export default card
