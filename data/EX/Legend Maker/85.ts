import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Banette ex",
		fr: "Branette ex",
		de: "Banette ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shady Move",
				fr: "Déplacement louche",
				de: "Zwielichtige Aktion"
			},
			effect: {
				en: "Once during your turn (before your attack), if Banette ex is your Active Pokémon, you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Banette ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Branette ex est votre Pokémon Actif, vous pouvez déplacer 1 marqueur de dégât d'1 Pokémon de n'importe quel joueur sur 1 autre Pokémon (les vôtres ou ceux de votre adversaire). Ce pouvoir ne peut pas être utilisé si Branette ex est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Banette ex dein Aktives Pokémon ist, verschiebe 1 Schadensmarke von 1 Pokémon (deines oder deines Gegners) auf ein anderes Pokémon (deines oder deines Gegners). Diese Poké-Power kann nicht benutzt werden, wenn Banette ex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Psychic",
			],
			name: {
				en: "Shadow Chant",
				fr: "Chant d'ombre",
				de: "Schattengesang"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Supporter card in your discard pile. You can't add more than 60 damage in this way.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette façon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Unterstützerkarte in deinem Ablagestapel zu. Es lassen sich so nicht mehr als 60 Schadenspunkte hinzufügen."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276962,
		tcgplayer: 83725
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jeremy-scharff-kim"]
		}
	]
}

export default card
