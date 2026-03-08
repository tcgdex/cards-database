import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
		de: "Quaxo"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		186,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Tetarte",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Leap Frog",
				fr: "Saute-grenouille",
				de: "Bocksprung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose a Water Pokémon on your Bench and switch it with your Active Pokémon. This power can’t be used if Politoed is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir un Pokémon Water de votre Banc et l’échanger avec votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Tarpaud est affecté par un État Spécial.",
				de: "Einmal während deises Zuges (vor deinem Angriff) kannst du ein -Pokémon auf deiner Bank wählen und es gegen dein Aktives Pokémon austauschen. Diese Poké-Power kann nicht benutzt werden, wenn Quaxo von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Chorus",
				fr: "Choralissime",
				de: "Großer Chor"
			},
			effect: {
				en: "Flip a coin for each Water Pokémon you have in play. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chacun de vos Pokémon Water en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf eine Münze für jedes deiner -Pokémon im Spiel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Whenever three or more of these get together, they sing in a loud voice that sounds like bellowing."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
	],

	thirdParty: {
		cardmarket: 279163,
		tcgplayer: 88251
	}
}

export default card
