import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Volcanion EX",
		fr: "Volcanion-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		721,
	],

	hp: 180,

	types: [
		"Fire",
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Steam Up",
				fr: "Jets Vapeur"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, during this turn, your Basic Fire Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie  de votre main. Dans ce cas, pendant ce tour, les attaques de vos Pokémon  de base infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Volcanic Heat",
				fr: "Chaleur Volcanique"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295164
	}
}

export default card
