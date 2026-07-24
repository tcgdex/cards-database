import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Rapidash",
		fr: "Raflésia",
		de: "Giflor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [78],

	hp: 70,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Pollen",
				fr: "Pollen toxik",
				de: "Gift-Pollen"
			},
			effect: {
				en: "Once during your turn (before you attack), you may flip a coin. If heads, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Raflésia est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Diese Fähigkeit kann nicht verwendet werden, falls Giflor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Danse-fleur",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rapidash.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Raflésia est maintenant Confus.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu. Giflor ist jetzt verwirrt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90376,
				cardmarket: 274906
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
