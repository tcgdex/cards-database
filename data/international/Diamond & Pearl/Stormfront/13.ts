import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'de-de': "Bronzong"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Cycler",
				'fr-fr': "Cycliste",
				'de-de': "Recycler"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may choose a card from your hand and put it on top of your deck. Then, search your deck for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward. This power can't be used if Bronzong is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir une carte de votre main et la placer au dessus de votre deck. Ensuite, choisissez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Puis, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Archéodong est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte von deiner Hand wählen und auf dein Deck legen. Danach durchsuche deine Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Diese Poké-Power kann nicht benutzt werden, wenn Bronzong von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Strange Spin",
				'fr-fr': "Tour étrange",
				'de-de': "Seltsamer Drall"
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Confused.",
				'fr-fr': "Si vous possédez le même nombre de cartes que votre adversaire, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wenn du die gleiche Anzahl Karten auf der Hand hast wie dein Gegner, fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
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
				'en-us': "Heavy Potential",
				'fr-fr': "Lourd potentiel",
				'de-de': "Starkes Potenzial"
			},
			effect: {
				'en-us': "Put a number of damage counters on each of your opponent's Pokémon equal to the number of Colorless Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				'fr-fr': "Placez autant de marqueurs de dégât sur chacun des Pokémon de votre adversaire qu'il y a d'Énergies Colorless dans le Coût de retraite de ce Pokémon (après application des effets sur le Coût de Retraite).",
				'de-de': "Lege auf jedes Pokémon deines Gegners für jede -Energie in seinen Rückzugskosten (nachdem Effekte auf die Rückzugskosten verrechnet wurden) 1 Schadensmarke."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278311,
		tcgplayer: 83994
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
