import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 150,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sacrifice",
				fr: "Sacrifice"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of your Pokémon and that Pokémon is Knocked Out. Then, search your discard pile for up to 2 basic Energy cards, attach them to Regigigas, and remove 8 damage counters from Regigigas. This power can't be used if Regigigas is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon que vous avez en jeu. Ce Pokémon est mis K.O. Ensuite, choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie de base, attachez-les à Regigigas et retirez-lui 8 marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Regigigas est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Blaster",
				fr: "Giga blaster"
			},
			effect: {
				en: "Discard the top card from your opponent's deck. Then, choose 1 card from your opponent's hand without looking and discard it. Regigigas can't use Giga Blaster during your next turn.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Ensuite, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la. Regigigas ne peut pas utiliser Giga blaster lors de votre prochain tour."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
