import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge",
				fr: "Décharge",
				de: "Discharge"
			},
			effect: {
				en: "Discard all Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage times the number of heads.",
				fr: "Défaussez toutes les cartes Énergie  attachées à Lainergie afin de pouvoir utiliser cette attaque. Lancez un nombre de pièces égal au nombre de cartes Énergie  que vous avez défaussé. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Discard all  Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of  Energy cards you discarded. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Electric Current",
				fr: "Courant électrique",
				de: "Electric Current"
			},
			effect: {
				en: "Take 1 Energy card attached to Flaaffy and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.",
				fr: "Prenez une carte Énergie  attachée à Lainergie et attachez-la à 1 des Pokémon de votre Banc. Si vous n'avez pas de Pokémon sur votre Banc, défaussez cette carte énergie.",
				de: "Take 1  Energy card attached to Flaaffy and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Parce qu'il stocke trop d'électricité, il développe des plaques où sa laine ne pousse plus."
	},

	thirdParty: {
		cardmarket: 274434,
		tcgplayer: 85474
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
