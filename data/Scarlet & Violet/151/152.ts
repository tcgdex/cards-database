import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Fossile Dôme Ancien",
		en: "Antique Dome Fossil",
		es: "Fósil Domo Antiguo",
		it: "Vecchio Domofossile",
		pt: "Fóssil Cúpula Arcaico",
		de: "Antikes Domfossil"
	},

	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			fr: "Armure Dôme",
			en: "Domed Armor",
			it: "Domocorazza",
			pt: "Armadura Cupular",
			de: "Domrüstung"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	effect: {
		fr: "Jouez cette carte comme si c'était un Pokémon Colorless de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial, et elle ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		en: "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		es: "Juega esta carta como si fuera un Pokémon Colorless Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		it: "Gioca questa carta come se fosse un Pokémon Base Colorless con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon Colorless Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\nA qualquer momento, durante o seu turno, você poderá descartar esta carta do jogo.",
		de: "Spiele diese Karte, als ob sie ein Basis-Colorless-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen."
	},

	trainerType: "Item",
	regulationMark: "G",

	attacks: [{
		name: {
			es: "Caparazón Domo"
		},

		effect: {
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}],

	variants: {
		holo: false
	}
}

export default card