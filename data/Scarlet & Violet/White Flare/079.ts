import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Antique Plume Fossil",
		fr: "Fossile Plume Ancien",
		de: "Antikes Federfossil",
		it: "Vecchio Fossilpiuma",
		pt: "Fóssil Pluma Arcaico",
		es: "Fósil Pluma Antiguo",
		'es-mx': "Fósil Pluma Antiguo"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			en: "Plume Protection",
			fr: "Protection Plume",
			de: "Federschutz",
			it: "Piumadifesa",
			pt: "Proteção Plumosa",
			es: "Protección Plumífera",
			'es-mx': "Pluma Protectora"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks from your opponent's Pokémon.",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners zugefügt wird.",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario.",
			pt: "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente.",
			es: "Mientras este Pokémon esté en tu Banca, se evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, se evita todo el daño infligido por ataques de los Pokémon de tu rival a este Pokémon."
		}
	}],

	effect: {
		en: "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		de: "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\n\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen.",
		it: "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\n\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\n\nA qualquer momento durante o seu turno, você poderá descartar esta carta do jogo.",
		es: "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		'es-mx': "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego."
	},

	trainerType: "Item",
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836049
	}
}

export default card