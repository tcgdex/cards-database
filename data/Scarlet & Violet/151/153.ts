import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Fossile Nautile Ancien",
		en: "Antique Helix Fossil",
		es: "Fósil Hélix Antiguo",
		it: "Vecchio Helixfossile",
		pt: "Fóssil Espiral Arcaico",
		de: "Antikes Helixfossil"
	},

	rarity: "Common",
	category: "Trainer",
	hp: 60,

	abilities: [{
		type: "Ability",

		name: {
			fr: "Houle Nautile",
			en: "Helical Swell",
			it: "Helixonda",
			pt: "Maré Espiralada",
			de: "Helixschwall"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Stadio che ha in mano.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da mão dele.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Stadionkarten aus seiner Hand spielen."
		}
	}],

	effect: {
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial, et elle ne peut pas battre en retraite.\n\nÀ tout moment pendant votre tour, vous pouvez défausser cette carte du jeu.",
		en: "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.\n\nAt any time during your turn, you may discard this card from play.",
		es: "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.\n\nEn cualquier momento durante tu turno, puedes descartar esta carta del juego.",
		it: "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.\n\nDurante il tuo turno, in qualsiasi momento, puoi scartare questa carta dal gioco.",
		pt: "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar.\nA qualquer momento, durante o seu turno, você poderá descartar esta carta do jogo.",
		de: "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.\nDu kannst diese Karte jederzeit während deines Zuges aus dem Spiel nehmen und auf deinen Ablagestapel legen."
	},

	trainerType: "Item",
	regulationMark: "G",

	attacks: [{
		name: {
			es: "Oleaje Helicoidal"
		},

		effect: {
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Estadio de su mano."
		}
	}],

	variants: {
		holo: false
	},

	illustrator: "AYUMI ODASHIMA"
}

export default card