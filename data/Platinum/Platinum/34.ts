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

	dexId: [
		272,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cheerful Voice",
				fr: "Voix joyeuse",
				de: "Cheerful Voice"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. During your next turn, each of Ludicolo's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance). This power can't be used if Ludicolo is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Votre tour est alors terminé. Lors de votre prochain tour, chacune des attaques de Ludicolo inflige 60 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance). Ce pouvoir ne peut pas être utilisé si Ludicolo est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. During your next turn, each of Ludicolo's attacks does 60 more damage to the Defending Pokémon (before applying Weakness and Resistance). This power can't be used if Ludicolo is affected by a Special Condition."
			},
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
				de: "Mad Dance"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "The Defending Pokémon is now Confused."
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
				de: "Best Dance"
			},
			effect: {
				en: "After doing damage, remove from Ludicolo the number of damage counters equal to the damage you did to the Defending Pokémon. Ludicolo can't use Best Dance during your next turn.",
				fr: "Après avoir infligé des dégâts, retirez à Ludicolo autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Ludicolo ne peut pas utiliser Meilleure danse lors de votre prochain tour.",
				de: "After doing damage, remove from Ludicolo the number of damage counters equal to the damage you did to the Defending Pokémon. Ludicolo can't use Best Dance during your next turn."
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

	thirdParty: {
		cardmarket: 278455,
		tcgplayer: 86900
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
