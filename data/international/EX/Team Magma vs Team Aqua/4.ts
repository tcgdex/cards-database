import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Manectric",
		'fr-fr': "Elecsprint de Team Aqua",
		'de-de': "Team Aquas Voltenso"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 70,

	types: [
		"Lightning",
		"Darkness"
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Power Shift",
				'fr-fr': "Transfert de puissance",
				'de-de': "Power Shift"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move any number of basic Energy cards attached to 1 of your Pokémon with Team Aqua in its name to another of your Pokémon. This power can't be used if Team Aqua's Manectric is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer autant de cartes Énergie de base que vous le voulez d'1 de vos Pokémon dont le nom comporte Team Aqua à un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Elecsprint de Team Aqua est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may move any number of basic Energy cards attached to 1 of your Pokémon with Team Aqua in its name to another of your Pokémon. This power can't be used if Team Aqua's Manectric is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunderspark",
				'fr-fr': "Étincéclair",
				'de-de': "Thunderspark"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's) that has Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire) possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to each Benched Pokémon (both yours and your opponent's) that has Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275781,
				tcgplayer: 89790
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275781,
				tcgplayer: 89790
			}
		},
		{
			type: "holo",
			stamp: ["chris-fulop"],
			thirdParty: {
				cardmarket: 871807,
				tcgplayer: 477445
			}
		}
	],

}

export default card
