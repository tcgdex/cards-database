import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Dragonium Z: Dragon Claw",
		'fr-fr': "Dracozélite : Dracogriffe",
		'es-es': "Dracostal Z: Garra Dragón",
		'it-it': "Draconium Z: Dragartigli",
		'pt-br': "Dragonium Z: Garra de Dragão",
		'de-de': "Dracium Z: Drachenklaue"
	},

	illustrator: "aky CG Works",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			'en-us': 'Destructive Drake GX',
		},
		damage: '80×',
		effect: {
			'en-us': 'Discard all basic Energy from this Pokémon. This attack does 80 damage for each card you discarded in this way. (you can\'t use mote than 1 GX attack in a game.)'
		},
		cost: [
			'Colorless',
			'Colorless',
			'Colorless'
		]
	}],

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée a l’attaque Dracogriffe, il peut utiliser l’attaque GX sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)\n\nColorlessColorlessColorless Destruction Draconique GX 80×\nDéfaussez toute l’Énergie de base de ce Pokémon. Cette attaque inflige 80 dégâts pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		'en-us': "If the Pokémon this card is attached to has the Dragon Claw attack, it can use the GX attack on this card. (You still need the necessary Energy to use this attack.)",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 408564,
		tcgplayer: 201649
	}
}

export default card
