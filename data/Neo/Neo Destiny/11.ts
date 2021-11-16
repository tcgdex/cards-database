import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Tyranitar",
		fr: "Tyranocif obscur"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Pupitar",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mountain Smasher",
				fr: "Casse-montagne"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Dark Tyranitar. This attack does 20 damage times the number of heads. Then, for each heads, discard the top card from your opponent's deck.",
				fr: "Lancez un nombre de pièces égal au nombre de cartes Énergie  attachées à Tyranocif obscur. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Puis, pour chaque face, défaussez-vous de la carte du dessus du deck de votre adversaire."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],

			name: {
				en: "Fling Away",
				fr: "Catapulte"
			},

			effect: {
				en: "If your opponent has any Benched Pokémon, this attack does 30 damage instead of 50 and choose 1 of those Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, cette attaque inflige 30 dégâts au lieu de 50 et vous choisissez un des Pokémon de son Banc. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance pour les Pokémon du Banc.)"
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Sa puissance est telle que même les montagnes ne lui résistent pas."
	}
}

export default card
