import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
		de: "Walraisa"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crush Draw",
				fr: "Pioche écrasante",
				de: "Crush Draw"
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on your deck. This power can't be used if Walrein is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retourner la carte du dessus de votre deck. Si cette carte est une carte Énergie de base, attachez-la à 1 de vos Pokémon. Sinon, replacez la carte sur votre deck. Ce pouvoir ne peut pas être utilisé si Kaimorse est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on your deck. This power can't be used if Walrein is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
				fr: "Glaciation",
				de: "Sheer Cold"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
				de: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276089,
		tcgplayer: 90466
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
