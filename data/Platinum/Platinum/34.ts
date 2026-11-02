import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		de: "Kappalores"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [272],

	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
		de: "Lombrero"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cheerful Voice",
				fr: "Voix joyeuse",
				de: "Fröhliche Stimme"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. During your next turn, each of Ludicolo's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance). This power can't be used if Ludicolo is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Votre tour est alors terminé. Lors de votre prochain tour, chacune des attaques de Ludicolo inflige 60 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance). Ce pouvoir ne peut pas être utilisé si Ludicolo est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wenn du das machst, ist dein Zug beendet. In deinem nächsten Zug fügen Kappalores' Angriffe dem Verteidigenden Pokémon 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden). Diese Poké-Power kann nicht benutzt werden, wenn Kappalores von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mad Dance",
				fr: "Danse de fou",
				de: "Wilder Tanz"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Best Dance",
				fr: "Meilleure danse",
				de: "Bester Tanz"
			},
			effect: {
				en: "After doing damage, remove from Ludicolo the number of damage counters equal to the damage you did to the Defending Pokémon. Ludicolo can't use Best Dance during your next turn.",
				fr: "Après avoir infligé des dégâts, retirez à Ludicolo autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Ludicolo ne peut pas utiliser Meilleure danse lors de votre prochain tour.",
				de: "Nachdem der Schaden zugefügt wurde, entferne Schadensmarken von Kappalores entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden. Kappalores kann Bester Tanz in deinem nächsten Zug nicht einsetzen."
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

	retreat: 2,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86900,
				cardmarket: 278455
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278455,
				tcgplayer: 86900
			}
		}
	],

}

export default card
