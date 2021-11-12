import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Prize Shift",
				fr: "Échange de Récompense"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose a card from your hand and put it as a Prize card face up. If you do, choose 1 of your face-down Prize cards without looking and put it into your hand. This power can't be used if Slowking is affected by a Special Condition or if all of your Prize cards are face up.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir une carte de votre main et la placer comme carte Récompense face retournée. Choisissez alors sans regarder une des cartes Récompense face cachée et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial ou si toutes vos cartes Récompense sont retournées."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Option",
				fr: "Option psychique"
			},
			effect: {
				en: "If Slowking has a Water Energy card attached to it, this attack does 20 damage plus 20 more damage. If Slowking has a Psychic Energy card attached to it, discard a Special Energy card attached to the Defending Pokémon, if any.",
				fr: "Si Roigada possède une carte Énergie , cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. Si Roigada possède une carte Énergie , défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
