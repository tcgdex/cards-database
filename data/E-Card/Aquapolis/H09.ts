import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
		de: "Psiana"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Return",
				fr: "Retour d'énergie",
				de: "Energy Return"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you choose an Energy card attached to 1 of your Pokémon and return to your hand. This power can't be used if Espeon is affected by a Special Condition.",
				fr: "Aussi souvent que vous le désirez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie attachée à l'un de vos Pokémon et la renvoyer dans votre main. Ce pouvoir ne peut pas être utilisé si Mentali est affecté par un État spécial.",
				de: "As often as you like during your turn (before your attack), choose an Energy card attached to 1 of your Pokémon and return it to your hand. This power can't be used if Espeon is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Blast",
				fr: "Mega dégâts",
				de: "Damage Blast"
			},
			effect: {
				en: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal au nombre de marqueurs de dégâts sur le Pokémon Défenseur. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275064,
		tcgplayer: 85317
	}
}

export default card
