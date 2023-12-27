import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Electivire FB",
		fr: "Elekable ",
		de: "Elevoltek FB"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Recycle",
				fr: "Recyclage d'énergie",
				de: "Energiekreislauf"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. If you do, your turn ends. Search your discard pile for up to 3 Energy cards and attach them to your Pokémon in any way you like. This power can't be used if Electivire FB is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Votre tour est alors terminé. Choisissez dans votre pile de défausse jusqu'à 3 cartes Énergie et attachez-les à vos Pokémon de la façon que vous voulez. Ce pouvoir ne peut pas être utilisé si Elekable  est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wenn du das machst, ist dein Zug anschließend beendet. Durchsuche deinen Ablagestapel nach bis zu 3 Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Diese Poké-Power kann nicht benutzt werden, wenn Elevoltek FB von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Spark",
				fr: "Étincelle puissante",
				de: "Mächtiger Funke"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die an allen deinen Pokémon im Spiel angelegt ist, zu."
			},
			damage: "30+",

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
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
