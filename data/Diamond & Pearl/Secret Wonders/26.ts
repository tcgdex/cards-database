import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Shift",
				fr: "Déplacement d'Énergie",
			},
			effect: {
				en: "Once during your turn, if Electrode would be Knocked Out by damage from an attack, you may use this power. Electrode isn't discarded. Instead, attach it as an Energy card to 1 of your Pokémon. While attached, this card is a Special Energy card and provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.)",
				fr: "Si Electrode est mis K.O par des dégâts infligés par une attaque, vous pouvez utiliser ce pouvoir. Electrode n'est pas défaussé. Attachez-le alors comme une carte Énergie à 1 de vos Pokémon. Lorsqu'elle est attachée, cette carte est une carte Énergie spéciale et fournit tous les types d'Énergie mais seulement 1 à la fois. (Elle n'a pas d'autre effet que de fournir de l'Énergie.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Ion Blast",
				fr: "Explosion d'ions",
			},
			effect: {
				en: "You may do 40 damage plus 60 more damage. If you do, Electrode does 100 damage to itself.",
				fr: "Vous pouvez infliger 40 dégâts plus 60 dégâts supplémentaires. Electrode s'inflige alors 100 dégâts.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
