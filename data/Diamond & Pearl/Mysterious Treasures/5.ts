import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		de: "Heiteira"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Kind Egg",
				fr: "Bon oeuf",
				de: "Nettes Ei"
			},
			effect: {
				en: "Once during your turn (before your attack), if Happiny is anywhere under Blissey, you may choose a number of cards in your hand up to the amount of Energy attached to Blissey and put those cards on top of your deck. Shuffle your deck afterward. Then, draw that many cards. This power can't be used if Blissey is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Ptiravi se trouve sous Leuphorie, vous pouvez choisir autant de cartes de votre main qu'il y a d'Énergie attachée à Leuphorie. Placez ces cartes au dessus de votre deck et mélangez votre deck. Ensuite, piochez autant de cartes. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Wonneira sich an beliebiger Stelle unter Heiteira befindet, eine Anzahl Karten, die höchstens der Anzahl der an Heiteira angelegten Energien entspricht, von deiner Hand auf dein Deck legen. Mische dein Deck danach. Danach ziehe so viele Karten, wie du zuvor auf dein Deck gelegt hast. Diese Poké-Power kann nicht benutzt werden, wenn Heiteira von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Happy Chance",
				fr: "Coup d'bol",
				de: "Günstige Gelegenheit"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Blissey. Before doing damage, you may search your discard pile for a basic Energy card and attach it to Blissey.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Leuphorie. Avant d'infliger des dégâts, vous pouvez choisir dans votre pile de défausse une carte Énergie de base et l'attacher à Leuphorie.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Heiteira angelegte Energie zu. Bevor der Schaden zugefügt wird, kannst du deinen Ablagestapel nach einer Basis-Energiekarte durchsuchen und sie an Heiteira anlegen."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	description: {
		fr: "Ce Pokémon au cœur d'or soigne les Pokémon malades. Il ressent la tristesse d'autrui."
	},

	thirdParty: {
		cardmarket: 277634,
		tcgplayer: 83921
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
		{
			type: "holo",
			stamp: ["paul-atanassov"]
		}
	]
}

export default card
