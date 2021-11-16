import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Blast",
				fr: "Boule roc"
			},
			effect: {
				en: "Discard up to 5 Fighting Energy cards attached to Armaldo. For each Energy card you discarded, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Défaussez jusqu'à 5 cartes Énergie  attachées à Armaldo. Pour chaque carte Énergie défaussée, choisissez des Pokémon en jeu de votre adversaire. Cette attaque inflige 20 dégâts à ces Pokémon. (Vous pouvez choisir le même Pokémon plus d'une fois.) Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Mach-griffe"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
