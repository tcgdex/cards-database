import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		'fr-fr': "Mackogneur",
		'de-de': "Machomei",
		'es-es': "Machamp",
		'pt-br': "Machamp",
		'it-it': "Machamp",
		'en-us': "Machamp"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'fr-fr': "Machopeur",
		'de-de': "Maschock",
		'es-es': "Machoke",
		'pt-br': "Machoke",
		'it-it': "Machoke",
		'en-us': "Machoke"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Muscles de Crise",
			'de-de': "Krisenmuskeln",
			'es-es': "Crisis Muscular",
			'pt-br': "Músculos Emergenciais",
			'it-it': "Muscoli Critici",
			'en-us': "Crisis Muscles"
		},

		effect: {
			'fr-fr': "S'il reste 3 cartes Récompense ou moins à votre adversaire, ce Pokémon reçoit +150 PV.",
			'de-de': "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, erhält dieses Pokémon +150 KP.",
			'es-es': "Si a tu rival le quedan 3 cartas de Premio o menos, este Pokémon obtiene 150 PS más.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este Pokémon receberá 150 PS a mais.",
			'it-it': "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo Pokémon ha 150 PS in più.",
			'en-us': "If your opponent has 3 or fewer Prize cards remaining, this Pokémon gets +150 HP."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Lasso Gros Bras",
			'de-de': "Erbarmungsloses Lasso",
			'es-es': "Lazo Brazos Fuertes",
			'pt-br': "Laço Corpulento",
			'it-it': "Lazo Forzuto",
			'en-us': "Strong-Arm Lariat"
		},

		effect: {
			'fr-fr': "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, kann dieses Pokémon während deines nächsten Zuges nicht angreifen.",
			'es-es': "Puedes hacer 100 puntos de daño más. Si lo haces, durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Puoi infliggere 100 danni in più. Se lo fai, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	thirdParty: {
		cardmarket: 505885
	}
}

export default card
