import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Antique Root Fossil",
		'fr-fr': "Fossile Racine Ancien",
		'es-es': "Fósil Raíz Antiguo",
		'it-it': "Vecchio Radifossile",
		'pt-br': "Fóssil Raiz Arcaico",
		'de-de': "Antikes Wurzelfossil"
	},

	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Primal Root",
			'fr-fr': "Primo-Racine",
			'es-es': "Raíz Primigenia",
			'it-it': "Radice Primordiale",
			'pt-br': "Raiz Primitiva",
			'de-de': "Urzeitwurzel"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Basic Pokémon cost {C} more.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par les Pokémon de base de votre adversaire coûtent {C} de plus.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por los Pokémon Básicos de tu rival cuestan {C} más.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il costo degli attacchi usati dai Pokémon Base del tuo avversario aumenta di {C}.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelos Pokémon Básicos do seu oponente custarão {C} a mais.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, erhöhen sich die Kosten der von Basis-Pokémon deines Gegners eingesetzten Attacken um {C}."
		}
	}],

	effect: {
		'en-us': "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		'fr-fr': "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		'es-es': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		'it-it': "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		'pt-br': "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\nA qualquer momento durante o seu turno, você poderá descartar esta carta do jogo.",
		'de-de': "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785984,
				tcgplayer: 567380
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785984,
				tcgplayer: 567380
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

}

export default card
