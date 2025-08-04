import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		de: "Impoleon"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 140,

	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Supreme Command",
				fr: "Commandant en chef",
				de: "Oberkommando"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose up to 2 cards from your opponent's hand without looking and put them face down next to the Defending Pokémon. (These cards are not in play or in your opponent's hand.) At the end of your opponent's next turn, return those cards to your opponent's hand. This power can't be used if Empoleon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir sans regarder jusqu'à 2 cartes de la main de votre adversaire et les placer face cachée à côté du Pokémon Défenseur. (Ces cartes ne sont ni en jeu ni dans la main de votre adversaire.) À la fin du prochain tour de votre adversaire, replacez ces cartes dans la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Pingoléon est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du bis zu 2 Karten auf der Hand deines Gegners wählen (ohne sie vorher anzusehen). Lege die Karten verdeckt neben das Verteidigende Pokémon (sie sind weder im Spiel, noch auf der Hand des Gegners). Am Ende des nächsten Zuges deines Gegners nimmt dieser die Karten zurück auf seine Hand. Diese Poké-Power kann nicht benutzt werden, wenn Impoleon von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Impact",
				fr: "Hydro-impact",
				de: "Hydroeinschlag"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't attack during your next turn.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Pingoléon ne peut pas attaquer lors de votre prochain tour.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Impoleon kann in deinem nächsten Zug nicht angreifen."
			},

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277503,
		tcgplayer: 85206
	}
}

export default card
