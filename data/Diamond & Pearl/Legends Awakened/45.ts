import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
		fr: "Duflor",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Reaction",
				fr: "Réaction Énergie",
			},
			effect: {
				en: "Once during your turn (before your attack), when you attach a Grass or Psychic Energy card from your hand to Vileplume (excluding effects of attacks or Poké-Powers), you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Asleep. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Grass ou Psychic de votre main à Rafflesia (les effets d'attaques ou des Poké-Powers exclus), vous pouvez utiliser ce pouvoir. Si vous attachez une carte Énergie Grass, le Pokémon Défenseur est maintenant Endormi. Si vous attachez une carte Énergie Psychic, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Rafflesia est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Disturbing Pollen",
				fr: "Pollen dérangeant",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors du prochain tour de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
