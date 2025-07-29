import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		de: "Ampharos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Gigaspark",
				fr: "Gigatincelle",
				de: "Gigaspark"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez un pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "La pointe de sa queue luit intensément et on l'aperçoit de très loin. Il sert de balise aux gens perdus."
	},

	thirdParty: {
		cardmarket: 274401
	}
}

export default card
