import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [338],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Solar Eclipse",
				fr: "Éclipse de soleil",
				de: "Sonnenfinsternis"
			},
			effect: {
				en: "Once during your turn (before your attack), if Lunatone is in play, you may use this power. Until the end of your turn, Solrock's type is Fire. This power can't be used if Solrock is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Seleroc est en jeu, vous pouvez utiliser ce pouvoir. Jusqu'à la fin du tour, Solaroc est {R}. Ce pouvoir ne peut pas être utilisé si Solaroc est affecté par un État Spécial.",
				de: "Du kannst diese Poké-Power einmal während deines Zuges (vor deinem Angriff) anwenden, falls sich Lunastein im Spiel befindet. Bis zum Ende des Zuges erhält Sonnfel den Typ {R}. Diese Poké-Power kann nicht verwendet werden, falls Sonnfel von einem Speziellen Zustand betroffen ist."
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
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Blast",
				fr: "Explosion solaire",
				de: "Sonnensturm"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 89425
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275790,
				tcgplayer: 89425
			}
		},
	],

}

export default card
