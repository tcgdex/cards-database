import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dragonium Z: Dragon Claw",
		fr: "Dracozélite : Dracogriffe",
		es: "Dracostal Z: Garra Dragón",
		it: "Draconium Z: Dragartigli",
		pt: "Dragonium Z: Garra de Dragão",
		de: "Dracium Z: Drachenklaue"
	},
	illustrator: "aky CG Works",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,

	attacks: [{
		name: {
			en: 'Destructive Drake GX',
		},
		damage: '80x',
		effect: {
			en: 'Discard all basic Energy from this Pokémon. This attack does 80 damage for each card you discarded in this way. (you can\'t use mote than 1 GX attack in a game.)'
		},
		cost: [
			'Colorless',
			'Colorless',
			'Colorless'
		]
	}],

	effect: {
		fr: "Si le Pokémon auquel cette carte est attachée a l’attaque Dracogriffe, il peut utiliser l’attaque GX sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)\n\nColorlessColorlessColorless Destruction Draconique GX 80×\nDéfaussez toute l’Énergie de base de ce Pokémon. Cette attaque inflige 80 dégâts pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		en: "If the Pokémon this card is attached to has the Dragon Claw attack, it can use the GX attack on this card. (You still need the necessary Energy to use this attack.)",
		es: "",
		it: "",
		pt: "",
		de: ""
	},
	trainerType: "Tool",

}

export default card
