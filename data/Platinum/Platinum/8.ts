import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [282],

	hp: 120,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Connect",
				fr: "Connection psy",
				de: "Psychoverbindung"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 {P}-Energie, die an 1 Pokémon auf deiner Bank angelegt ist, an dein Aktives Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Burst",
				fr: "Explosion d'énergie",
				de: "Energieausbruch"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Gardevoir and the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Gardevoir et au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die an Guardevoir und dem Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Protection",
				fr: "Protection psy",
				de: "Psychoschützer"
			},
			effect: {
				en: "Gardevoir has no Weakness during your opponent's next turn.",
				fr: "Gardevoir ne possède pas de Faiblesse lors du prochain tour de votre adversaire.",
				de: "Während des nächsten Zuges deines Gegners hat Guardevoir keine Schwäche."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85636
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125076,
				cardmarket: 278429
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278429,
				tcgplayer: 85636
			}
		}
	],

}

export default card
