import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Mismagius GL LV.X",
		'fr-fr': "Magirêve  Niv. X",
		'de-de': "Traunmagil GL"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [429],

	hp: 100,

	types: [
		"Psychic"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Magical Return",
				'fr-fr': "Retour magique",
				'de-de': "Magische Rückkehr"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may return a Pokémon Tool or Technical Machine card attached to your Pokémon to your hand. This power can't be used if Mismagius GL is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez reprendre dans votre main une carte Outil Pokémon ou une carte Machine Technique attachée à votre Pokémon. Ce pouvoir ne peut pas être utilisé si Magirêve  est affecté par un État Spécial.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-Ausrüstung oder Technische Maschine, die an 1 deiner Pokémon angelegt ist, auf deine Hand nehmen. Diese Poké-Power kann nicht benutzt werden, wenn Traunmagil GL von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Magic",
				'fr-fr': "Obscurité magique",
				'de-de': "Finsternis-Magie"
			},
			effect: {
				'en-us': "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 8 damage counters in this way.",
				'fr-fr': "Comptabilisez le nombre de cartes dans votre main. Placez autant de marqueurs de dégât sur le Pokémon Défenseur. Vous ne pouvez pas placer plus de 8 marqueurs de dégât de cette façon.",
				'de-de': "Zähle die Anzahl deiner Handkarten. Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon. Du kannst auf diese Weise nicht mehr als 8 Schadensmarken verteilen."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278684,
				tcgplayer: 87522
			}
		},
	],

}

export default card
