import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Gallade E4 LV.X",
		'fr-fr': "Gallame  Niv. X",
		'de-de': "Galagladi 4"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [475],
	hp: 100,
	types: [
		"Psychic"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Blade Storm",
				'fr-fr': "Tempête de lames",
				'de-de': "Klingengewitter"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you put Gallade E4 LV.X from your hand onto your Active Gallade E4, you may put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Gallame  LV.X de votre main sur votre Gallame  Actif, vous pouvez placer 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Galagladi 4 LV.X von deiner Hand auf dein Aktives Galagladi 4 legst, 1 Schadensmarke auf jedes Pokémon deines Gegners legen."
			}
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
				'en-us': "Aimed Cut",
				'fr-fr': "Coupure ciblée",
				'de-de': "Gezielter Schnitt"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278680,
				tcgplayer: 85609
			}
		},
	],

}

export default card
