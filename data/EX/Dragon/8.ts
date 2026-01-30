import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		de: "Plusle"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chain of Events",
				fr: "Réactions en chaîne",
				de: "Chain of Events"
			},
			effect: {
				en: "As long as Plusle is your Active Pokémon, whenever your other Active Pokémon, if any, attacks, you may use Cheer On after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active Pokémon has the Chain of Events Poké-Body.",
				fr: "Tant que Posipi est votre Pokémon Actif, dès que votre autre Pokémon Actif, si vous en avez un, attaque, vous pouvez utiliser Encouragement après la première attaque (vous avez toujours besoin du nombre d'Énergies nécessaires pour utiliser Encouragement). Vous ne pouvez pas utiliser Encouragement plus d'une fois, même si votre autre Pokémon Actif possède le Poké-Body Réactions en chaîne.",
				de: "As long as Plusle is your Active Pokémon, whenever your other Active Pokémon, if any, attacks, you may use Cheer On, after the first attack (you still need the necessary Energy to use Cheer On). You can't use Cheer On more than once in this way even if your other Active Pokémon has the Chain of Events Poké-Body."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer On",
				fr: "Encouragement",
				de: "Cheer On"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon (including Plusle).",
				fr: "Retirez un marqueur de dégât à chacun de vos Pokémon (Posipi inclus).",
				de: "Remove 1 damage counter from each of your Pokémon (including Plusle)."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Extra Circuit",
				fr: "Circuit supplémentaire",
				de: "Extra Circuit"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If you choose Pokémon-ex, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Si vous choisissez un Pokémon-ex, cette attaque inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				de: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If you choose Pokémon-ex, this attack does 40 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

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

	thirdParty: {
		tcgplayer: 88161,
		cardmarket: 275885
	}
}

export default card
