import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togepi",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Miracle Shift",
				fr: "Changement miracle"
			},
			effect: {
				en: "Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can't be used if Togetic is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), défaussez-vous d'une carte Énergie de base attachée à l'un de vos Pokémon. Ensuite, choisissez une carte Énergie dans votre pile de défausse et attachez-la à ce Pokémon. Ce pouvoir ne peut pas être utilisé si Togetic est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mini-Metronome",
				fr: "Mini métronome"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic is still ). Togetic performs that attack.",
				fr: "Lancez une pièce. Si c'est face, choisissez une des attaques du Pokémon Défenseur. Mini métronome copie cette attaque à l'exception de son coût en Énergie. (Vous devez toujours accomplir les autres actions afin d'utiliser cette attaque.) (Quel que soit le type du Pokémon Défenseur, Togetic reste .) Togetic accomplit cette attaque."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
