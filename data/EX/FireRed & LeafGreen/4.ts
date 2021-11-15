import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Metamorph"
	},
	illustrator: "MikiTanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Variation",
				fr: "Forme variable"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Basic Pokémon (excluding Pokémon-ex and Ditto) and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Place Ditto in the discard pile.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher un Pokémon de base dans votre pile de défausse (sauf les Pokémon-ex et Metamorph) et l'échanger avec Metamorph. (Toutes les cartes attachées à Metamorph, ainsi que les marqueurs de dégât, États Spéciaux et autres effets sont maintenant sur le nouveau Pokémon.) Défaussez Metamorph."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Ball",
				fr: "Boule d'Énergie"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Ditto but not used to pay for this attack's Energy cost. You can't add more then 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Metamorph qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
			},
			damage: "10+",

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
