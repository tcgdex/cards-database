import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Vieil Ambre Ancien",
		'en-us': "Antique Old Amber",
		'es-es': "Ámbar Viejo Antiguo",
		'it-it': "Vecchia Ambra Antica",
		'pt-br': "Âmbar Velho Arcaico",
		'de-de': "Antiker Altbernstein"
	},

	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Protection Ambre",
			'en-us': "Amber Protection",
			'it-it': "Ambradifesa",
			'pt-br': "Proteção Âmbar",
			'de-de': "Bernsteinschutz"
		},

		effect: {
			'fr-fr': "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			'en-us': "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			'it-it': "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "Previna todos os efeitos de Habilidades dos Pokémon do seu oponente causados a este Pokémon.",
			'de-de': "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	effect: {
		'fr-fr': "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial, et elle ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		'en-us': "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		'es-es': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		'it-it': "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		'pt-br': "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\nA qualquer momento, durante o seu turno, você poderá descartar esta carta do jogo.",
		'de-de': "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen."
	},

	trainerType: "Item",
	regulationMark: "G",

	attacks: [{
		name: {
			'es-es': "Protección Ámbar"
		},

		effect: {
			'es-es': "Se evitan todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon."
		}
	}],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733749,
				tcgplayer: 516716,
				cardtrader: 261626
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733749,
				tcgplayer: 516716,
				cardtrader: 261626
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

	
}

export default card
