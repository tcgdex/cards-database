import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Crisis Muscles",
			fr: "Muscles de Crise",
			es: "Crisis Muscular",
			it: "Muscoli Critici",
			pt: "Músculos Emergenciais",
			de: "Krisenmuskeln"
		},

		effect: {
			en: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon gets +150 HP.",
			fr: "S'il reste 3 cartes Récompense ou moins à votre adversaire, ce Pokémon reçoit +150 PV.",
			es: "Si a tu rival le quedan 3 cartas de Premio o menos, este Pokémon obtiene 150 PS más.",
			it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo Pokémon ha 150 PS in più.",
			pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este Pokémon receberá 150 PS a mais.",
			de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, erhält dieses Pokémon +150 KP."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Strong-Arm Lariat",
			fr: "Lasso Gros Bras",
			es: "Lazo Brazos Fuertes",
			it: "Lazo Forzuto",
			pt: "Laço Corpulento",
			de: "Erbarmungsloses Lasso"
		},

		effect: {
			en: "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack.",
			fr: "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Puedes hacer 100 puntos de daño más. Si lo haces, durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Puoi infliggere 100 danni in più. Se lo fai, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": true,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674101,
		tcgplayer: 283974
	}
}

export default card
