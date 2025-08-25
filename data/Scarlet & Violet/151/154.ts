import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Vieil Ambre Ancien",
		en: "Antique Old Amber",
		es: "Ámbar Viejo Antiguo",
		it: "Vecchia Ambra Antica",
		pt: "Âmbar Velho Arcaico",
		de: "Antiker Altbernstein"
	},

	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			fr: "Protection Ambre",
			en: "Amber Protection",
			it: "Ambradifesa",
			pt: "Proteção Âmbar",
			de: "Bernsteinschutz"
		},

		effect: {
			fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			en: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			it: "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "Previna todos os efeitos de Habilidades dos Pokémon do seu oponente causados a este Pokémon.",
			de: "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	effect: {
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial, et elle ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		en: "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		es: "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		it: "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\nA qualquer momento, durante o seu turno, você poderá descartar esta carta do jogo.",
		de: "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen."
	},

	trainerType: "Item",
	regulationMark: "G",

	attacks: [{
		name: {
			es: "Protección Ámbar"
		},

		effect: {
			es: "Se evitan todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon."
		}
	}],

	variants: {
		holo: false
	},

	illustrator: "AYUMI ODASHIMA",

	thirdParty: {
		cardmarket: 733749
	}
}

export default card