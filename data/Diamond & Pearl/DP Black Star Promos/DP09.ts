import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Torterra",
		fr: "Torterra",
		de: "Chelterrar"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		389,
	],
	hp: 160,
	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Forest Murmurs",
				fr: "Murmures de la forêt",
				de: "Waldgeflüster"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have more Prize cards left than your opponent, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. This power can't be used if Torterra is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez plus de cartes Récompense que votre adversaire, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Torterra est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn du mehr Preise übrig hast als dein Gegner, kannst du 1 Pokémon auf der Bank deines Gegners wählen und es gegen 1 Verteidigendes Pokémon austauschen. Diese Poké-Power kann nicht benutzt werden, wenn Chelterrar von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vigorous Dash",
				fr: "Ruée vigoureuse",
				de: "Energischer Sprint"
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Torterra does 30 damage to itself.",
				fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Torterra s'inflige 30 dégâts.",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz auf der Bank nicht an.) Chelterrar fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
		es: "Grotle",
		it: "Grotle",
		pt: "Grotle",
		de: "Chelcarain"
	}
}

export default card
