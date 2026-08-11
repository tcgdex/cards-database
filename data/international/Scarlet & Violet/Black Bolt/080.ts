import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Antique Cover Fossil",
		'fr-fr': "Fossile Plaque Ancien",
		'de-de': "Antikes Schildfossil",
		'it-it': "Vecchio Fossiltappo",
		'pt-br': "Fóssil Casca Arcaico",
		'es-es': "Fósil Tapa Antiguo",
		'es-mx': "Fósil Cubierta Antiguo"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Protective Cover",
			'fr-fr': "Plaque Protectrice",
			'de-de': "Schutzabdeckung",
			'it-it': "Tappo Protettivo",
			'pt-br': "Casca Protetora",
			'es-es': "Tapa Protectora",
			'es-mx': "Cubierta Protectora"
		},

		effect: {
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'de-de': "Verhindere alle Effekte der von Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			'it-it': "Previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto)."
		}
	}],

	effect: {
		'en-us': "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		'fr-fr': "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		'de-de': "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\n\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen.",
		'it-it': "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\n\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		'pt-br': "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\n\nA qualquer momento durante o seu turno, você poderá descartar esta carta do jogo.",
		'es-es': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		'es-mx': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego."
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836067,
				tcgplayer: 642529
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836067,
				tcgplayer: 642529
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836471,
				tcgplayer: 644864
			}
		},
	]
}

export default card
