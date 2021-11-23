import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Kind Egg",
				fr: "Bon oeuf"
			},
			effect: {
				en: "Once during your turn (before your attack), if Happiny is anywhere under Blissey, you may choose a number of cards in your hand up to the amount of Energy attached to Blissey and put those cards on top of your deck. Shuffle your deck afterward. Then, draw that many cards. This power can't be used if Blissey is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Ptiravi se trouve sous Leuphorie, vous pouvez choisir autant de cartes de votre main qu'il y a d'Énergie attachée à Leuphorie. Placez ces cartes au dessus de votre deck et mélangez votre deck. Ensuite, piochez autant de cartes. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Happy Chance",
				fr: "Coup d'bol"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Blissey. Before doing damage, you may search your discard pile for a basic Energy card and attach it to Blissey.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Leuphorie. Avant d'infliger des dégâts, vous pouvez choisir dans votre pile de défausse une carte Énergie de base et l'attacher à Leuphorie."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	description: {
		fr: "Ce Pokémon au cœur d'or soigne les Pokémon malades. Il ressent la tristesse d'autrui."
	}
}

export default card
