import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Ampharos",
		fr: "Pharamp obscur",
		de: "Dunkles Ampharos"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Conductivity",
				fr: "Conductivité",
				de: "Conductivity"
			},
			effect: {
				en: "Whenever your opponent attaches an Energy card to a Pokémon from his or her hand, this Power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance) This power stops working if you have more than 1 Dark Ampharos in play or while Dark Ampharos is Asleep, Confused or Paralysed.",
				fr: "Lorsque votre adversaire attache une carte Énergie de sa main à son Pokémon, ce pouvoir inflige 10 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance.) Ce pouvoir cesse de fonctionner si vous avez plus d'un Pharamp obscur en jeu ou si Pharamp obscur est Endormi, Confus ou Paralysé.",
				de: "Whenever your opponent attaches an Energy card from his or her hand to a Pokémon, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if you have more than 1 Dark Ampharos in play or while Dark Ampharos is Asleep, Confused, or Paralyzed."
			},
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
				en: "Shock Bolt",
				fr: "Choc'éclair",
				de: "Shock Bolt"
			},
			effect: {
				en: "Discard all Energy cards attached to this Pokémon in order to use this attack.",
				fr: "Défaussez-vous de toutes les cartes Énergie  attachées à Pharamp obscur ou cette attaque ne fait rien.",
				de: "Discard all  Energy cards attached to Dark Ampharos or this attack does nothing."
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

	description: {
		fr: "La nuit, la pointe de sa queue est visible à des kilomètres à la ronde, même pour les bateaux qui naviguent au large."
	},

	thirdParty: {
		cardmarket: 274653
	}
}

export default card
