import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Tyranitar δ",
		fr: "Tyranocif δ ESPÈCES DELTA"
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
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crush Draw",
				fr: "Pioche broyage"
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If not, put the card back on top of your deck. This power can't be used if Tyranitar is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retourner la carte du dessus de votre deck. Si c'est une carte Énergie de base, attachez-la à 1 de vos Pokémon. Sinon, replacez la carte au dessus du deck. Ce pouvoir ne peut pas être utilisé si Tyranocif est affecté par un État Spécial."
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
				fr: "Broyage Delta"
			},
			effect: {
				en: "You may discard an Energy card attached to Tyranitar. If you do, this attack does 50 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Tyranocif. Cette attaque inflige alors 50 dégâts plus 20 dégâts supplémentaires."
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





}

export default card
