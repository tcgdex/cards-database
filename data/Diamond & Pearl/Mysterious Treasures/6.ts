import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzor",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Oracle",
				fr: "Oracle miraculeux"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. Then, discard a card from your hand. If you discard an Energy card, draw 1 more card. This power can't be used if Bronzong is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher une carte. Ensuite, défaussez une carte de votre main. Si vous défaussez une carte Énergie, piochez une carte supplémentaire. Ce pouvoir ne peut pas être utilisé si Archéodong est affecté par un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Shady Stamp",
				fr: "Coup louche"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		fr: "La découverte d'un de ces Pokémon sur un site de fouilles après 2 000 ans de sommeil a fait sensation."
	}
}

export default card
