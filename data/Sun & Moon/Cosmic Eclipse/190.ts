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
			de: "Zerstörerisches Drachendröhnen GX"
		},
		damage: '80×',
		effect: {
			en: 'Discard all basic Energy from this Pokémon. This attack does 80 damage for each card you discarded in this way. (you can\'t use mote than 1 GX attack in a game.)',
			de: "Lege alle Basis-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 80 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		de: "Lege 1 Pokémon-Ausrüstung an 1 deiner Pokémon an, an das noch keine Pokémon-Ausrüstung angelegt ist. Wenn das Pokémon, an das diese Karte angelegt ist, die Attacke Drachenklaue hat, kann es die GX-Attacke auf dieser Karte einsetzen. (Du benötigst jedoch die für diese Attacke notwendige Energie.) Du kannst während deines Zuges (bevor du angreifst) beliebig viele Itemkarten spielen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 408564,
		tcgplayer: 201649
	}
}

export default card
