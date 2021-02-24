import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Omastar BREAK",
		fr: "Amonistar TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omastar",
		fr: "Amonistar",
	},
	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dangerous Tentacle",
				fr: "Tentacule Dangereux",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon-EX with his or her Active Pokémon.",
				fr: "Une seule fois pendant votre tour(avant votre attaque), vous pouvez échanger l'un des Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{

			name: {
				fr: "Règle des Évolutions TURBO",
			},


		},
	],






}

export default card
