import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pure Body",
				fr: "Corps pur",
				de: "Pure Body"
			},
			effect: {
				en: "To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)",
				fr: "Pour attacher une carte Énergie  de votre main à Suicune, vous devez vous défausser d'une carte Énergie attachée à Suicune. (Attachez l'Énergie , et défaussez-vous ensuite d'une carte Énergie attachée à Suicune.)",
				de: "To attach a -Energy from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the -Energy, and then discard an Energy card from Suicune)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Wave",
				fr: "Hypnovague",
				de: "Hypno Wave"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et le Pokémon Défenseur est maintenant Endormi.",
				de: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275057,
		tcgplayer: 89598
	}
}

export default card
