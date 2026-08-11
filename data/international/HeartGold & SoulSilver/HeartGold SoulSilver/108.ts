import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Feraligatr",
		'fr-fr': "Aligatueur",
		'de-de': "Impergator"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [160],

	hp: 140,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocodil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Rain Dance",
				'fr-fr': "Danse pluie",
				'de-de': "Regentanz"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Water Pokémon. This power can't be used if Feraligatr is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à l’un de vos Pokémon Water. Ce pouvoir ne peut pas être utilisé si Aligatueur est affecté par un État spécial.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 -Energiekarte von deiner Hand an 1 deiner -Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Impergator von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Hydro Crunch",
				'fr-fr': "Hydro-machouille",
				'de-de': "Hydroknirscher"
			},
			effect: {
				'en-us': "Does 60 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85420,
				cardmarket: 278992
			}
		},
	],

}

export default card
