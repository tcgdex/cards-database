import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
		de: "Turtok"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Waterlog",
				fr: "Imbibé d'O",
				de: "Fluten"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach as many basic Water Energy cards from your hand to any of your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Blastoise is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher autant de cartes Énergie de base Water de votre main que vous voulez à vos Pokémon de la façon que vous voulez. Votre tour se termine. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du beliebig viele -Basis-Energiekarten von deiner Hand in beliebiger Verteilung an deine Pokémon anlegen. Wenn du das machst, ist dein Zug jetzt beendet. Diese Poké-Power kann nicht benutzt werden, wenn Turtok von einem Speziellen Zustand betroffen ist."
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
				en: "Hydro Pump",
				fr: "Hydrocanon",
				de: "Hydropumpe"
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque Énergie Water attachée à Tortank mais qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Turtok angelegte -Energie zu, die nicht zum Bezahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277755,
		tcgplayer: 83893
	}
}

export default card
