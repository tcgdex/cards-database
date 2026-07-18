import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Armor Fossil",
		fr: "Fossile Armure Ancien",
		es: "Fósil Coraza Antiguo",
		'es-mx': "Fósil Coraza Antiguo",
		de: "Antikes Panzerfossil",
		it: "Vecchio Fossilscudo",
		pt: "Fóssil Armadura Arcaico"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",

	effect: {
		en: "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		es: "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		'es-mx': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		de: "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\n\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen.",
		it: "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\n\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\n\nA qualquer momento durante o seu turno, você poderá descartar esta carta do jogo."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895856,
				tcgplayer: 704829
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895856,
				tcgplayer: 704829
			}
		},
	],

	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			en: "Protective Armor",
			fr: "Armure Protectrice",
			es: "Coraza Protectora",
			'es-mx': "Coraza Protectora",
			de: "Schützender Panzer",
			it: "Scudo Protettivo",
			pt: "Armadura Protetora"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, all of your Pokémon take 10 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, tous vos Pokémon subissent 10 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques de los Pokémon de tu rival hacen 10 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, todos tus Pokémon reciben 10 puntos de daño menos de los ataques de los Pokémon de tu rival (después de aplicar Debilidad y Resistencia).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, werden allen deinen Pokémon durch Attacken von Pokémon deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Fintanto che questo Pokémon è in posizione attiva, i tuoi Pokémon subiscono 10 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, todos os seus Pokémon receberão 10 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência)."
		}
	}]
}

export default card
