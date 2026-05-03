import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Jaw Fossil",
		fr: "Fossile Mâchoire Ancien",
		es: "Fósil Mandíbula Antiguo",
		'es-mx': "Fósil Mandíbula Antiguo",
		de: "Antikes Kieferfossil",
		it: "Vecchio Fossilmascella",
		pt: "Fóssil de Mandíbula Arcaico"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Jaw",
			fr: "Mâchoire Intimidante",
			es: "Mandíbula Intimidatoria",
			'es-mx': "Mandíbula Intimidante",
			de: "Bedrohlicher Kiefer",
			it: "Mascella Prepotente",
			pt: "Mandíbula Intimidadora"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 30 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
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

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684353,
		cardmarket: 877484
	}
}

export default card
