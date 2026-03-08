import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Tyranitar δ",
		fr: "Tyranocif δ",
		de: "Despotar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 120,

	types: [
		"Fire",
		"Metal",
	],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crush Draw",
				fr: "Pioche broyage",
				de: "Zermalmender Zug"
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on top of your deck. This power can't be used if Tyranitar is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retourner la carte du dessus de votre deck. Si c'est une carte Énergie de base, attachez-la à 1 de vos Pokémon. Sinon, replacez la carte au dessus du deck. Ce pouvoir ne peut pas être utilisé si Tyranocif est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du die oberste Karte deines Decks aufdecken. Wenn es sich bei dieser Karte um eine Basis-Energiekarte handelt, lege sie an 1 deiner Pokémon an. Wenn nicht, lege sie zurück auf dein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Despotar von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Delta Crush",
				fr: "Broyage Delta",
				de: "Delta-Zermalmer"
			},
			effect: {
				en: "You may discard an Energy card attached to Tyranitar. If you do, this attack does 50 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Tyranocif. Cette attaque inflige alors 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Du kannst 1 an Despotar angelegte Energiekarte auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276779
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
