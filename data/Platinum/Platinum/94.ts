import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Skuntank G",
		fr: "Moufflair G",
		de: "Skuntank G"
	},

	illustrator: "Makoto Imai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [435],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Structure",
				fr: "Structure poison",
				de: "Giftige Struktur"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a Stadium card in play, you may use this power. Each Active Pokémon (both yours and your opponent's) (excluding Pokémon SP) is now Poisoned. This power can't be used if Skuntank is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez une carte Stade en jeu, vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) (Pokémon SP exclus) est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Moufflair  est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du 1 Stadion-Karte im Spiel hast, diese Poké-Power benutzen. Alle Aktiven Pokémon (deine und die deines Gegners) (außer Pokémon SP) sind jetzt vergiftet. Diese Poké-Power kann nicht benutzt werden, wenn Skuntank G von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				de: "Rauchwolke"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, this attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89284,
				cardmarket: 278515
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278515,
				tcgplayer: 89284
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479953
			}
		}
	],

}

export default card
