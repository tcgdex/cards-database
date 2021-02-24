import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dig Well",
				fr: "Puits creusé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose as many Water Energy cards as you like, and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Blastoise is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus de votre deck. Choisissez autant de cartes Énergie Water que vous voulez et attachez-les à vos Pokémon de la façon que vous voulez. Défaussez les autres cartes. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État Spécial.",
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
				en: "Aqua Press",
				fr: "Aqua presse",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Water Energy attached to all Pokémon (both yours and your opponent's).",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à tous les Pokémon (les vôtres et ceux de votre adversaire).",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Launcher",
				fr: "Double lanceur",
			},
			effect: {
				en: "Discard 2 Water Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn.",
				fr: "Défaussez 2 Énergies Water attachées à Tortank. Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque leur inflige 60 dégâts chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Tortank ne peut pas utiliser Double Lanceur lors de votre prochain tour.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
