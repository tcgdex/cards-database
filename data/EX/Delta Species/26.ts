import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Rain Castform",
		fr: "Morpheo Pluie"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
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
				en: "Temperamental Weather",
				fr: "Météo capricieuse"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Soleil ou Morpheo Neige et l'échanger avec Morpheo Pluie. (Toutes les cartes attachées à Morpheo Pluie, les marqueurs de dégât, les États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Pluie à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Holon Splash",
				fr: "Éclaboussure Holon"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Holon Energy card attached to Rain Castform.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Holon attachée à Morpheo Pluie."
			},
			damage: "30+",

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
