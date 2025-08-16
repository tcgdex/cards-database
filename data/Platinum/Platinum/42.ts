import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
		de: "Noktuska"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		332,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Wound",
				fr: "Blessure pointue",
				de: "Spike Wound"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 50 damage to that Pokémon. (Don't apply Weakness and resistance for benched Pokémon.)"
			},

		},
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				en: "Poison Experiment",
				fr: "Expérimentation empoisonnée",
				de: "Poison Experiment"
			},
			effect: {
				en: "You may discard a Grass or Darkness Energy attached to Cacturne. If you discard a Grass Energy, the Defending Pokémon is now Poisoned. If you discard a Darkness Energy, the Defending Pokémon is now Paralyzed.",
				fr: "Vous pouvez défausser une Énergie Grass ou Darkness attachée à Cacturne. Si vous défaussez une Énergie Grass, le Pokémon Défenseur est maintenant Empoisonné. Si vous défaussez une Énergie Darkness, le Pokémon Défenseur est maintenant Paralysé.",
				de: "You may discard a  or  Energy attached to Cacturne. If you discard a  Energy, the Defending Pokémon is now Poisoned. If you discard a  Energy, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278463,
		tcgplayer: 84081
	}
}

export default card
