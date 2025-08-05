import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Mackogneur",
		de: "Machomei",
		es: "Machamp",
		pt: "Machamp",
		it: "Machamp",
		en: "Machamp"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Machopeur",
		de: "Maschock",
		es: "Machoke",
		pt: "Machoke",
		it: "Machoke",
		en: "Machoke"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Muscles de Crise",
			de: "Krisenmuskeln",
			es: "Crisis Muscular",
			pt: "Músculos Emergenciais",
			it: "Muscoli Critici",
			en: "Crisis Muscles"
		},

		effect: {
			fr: "S'il reste 3 cartes Récompense ou moins à votre adversaire, ce Pokémon reçoit +150 PV.",
			de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, erhält dieses Pokémon +150 KP.",
			es: "Si a tu rival le quedan 3 cartas de Premio o menos, este Pokémon obtiene 150 PS más.",
			pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este Pokémon receberá 150 PS a mais.",
			it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo Pokémon ha 150 PS in più.",
			en: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon gets +150 HP."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Lasso Gros Bras",
			de: "Erbarmungsloses Lasso",
			es: "Lazo Brazos Fuertes",
			pt: "Laço Corpulento",
			it: "Lazo Forzuto",
			en: "Strong-Arm Lariat"
		},

		effect: {
			fr: "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, kann dieses Pokémon während deines nächsten Zuges nicht angreifen.",
			es: "Puedes hacer 100 puntos de daño más. Si lo haces, durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Puoi infliggere 100 danni in più. Se lo fai, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			en: "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	thirdParty: {
		cardmarket: 505885
	}
}

export default card