import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Castform Snow-cloud Form",
		fr: "Morpheo Neige",
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperament",
				fr: "Tempérament",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for any Castform and switch it with Castform Snow-cloud Form. (Any cards attached to Castform Snow-cloud Form, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform Snow-cloud Form back into your deck. You can't use more than 1 Temperament Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck n'importe quel Morpheo et l'échanger avec Morpheo Neige. (Toutes les cartes attachées à Morpheo Neige, les marqueurs de dégât, États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez alors Morpheo Neige à votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tempérament par tour.",
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
				en: "Hail",
				fr: "Grêle",
			},

			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Son aspect change avec la météo. On a récemment découvert que ses molécules étaient pareilles à l'eau."
	}
}

export default card
