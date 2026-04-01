import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Sail Fossil",
		fr: "Fossile Nageoire Ancien",
		es: "Fósil Aleta Antiguo",
		'es-mx': "Fósil Aleta Antiguo",
		de: "Antikes Flossenfossil",
		it: "Vecchio Fossilpinna",
		pt: "Fóssil de Vela Arcaico"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			en: "Protective Sail",
			fr: "Nageoire Protectrice",
			es: "Aleta Protectora",
			'es-mx': "Aleta Protectora",
			de: "Schützende Flosse",
			it: "Pinna Protettiva",
			pt: "Vela Protetora"
		},

		effect: {
			en: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte infligés à ce Pokémon.",
			es: "Cada vez que tu rival juegue una carta de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
			'es-mx': "Cada vez que tu rival juegue 1 carta de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
			de: "Verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden.",
			it: "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
			pt: "Sempre que seu oponente jogar uma carta de Apoiador da mão dele, previna todos os efeitos daquela carta causados a este Pokémon."
		}
	}],

	effect: {
		en: "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		es: "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		'es-mx': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		de: "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen.",
		it: "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\n\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\n\nA qualquer momento durante o seu turno, você poderá descartar esta carta do jogo."
	},

	trainerType: "Item",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684354,
		cardmarket: 877485
	}
}

export default card