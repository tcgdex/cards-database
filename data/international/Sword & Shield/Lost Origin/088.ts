import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	illustrator: "Nisota Niso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Crisis Muscles",
			'fr-fr': "Muscles de Crise",
			'es-es': "Crisis Muscular",
			'it-it': "Muscoli Critici",
			'pt-br': "Músculos Emergenciais",
			'de-de': "Krisenmuskeln"
		},

		effect: {
			'en-us': "If your opponent has 3 or fewer Prize cards remaining, this Pokémon gets +150 HP.",
			'fr-fr': "S'il reste 3 cartes Récompense ou moins à votre adversaire, ce Pokémon reçoit +150 PV.",
			'es-es': "Si a tu rival le quedan 3 cartas de Premio o menos, este Pokémon obtiene 150 PS más.",
			'it-it': "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo Pokémon ha 150 PS in più.",
			'pt-br': "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este Pokémon receberá 150 PS a mais.",
			'de-de': "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, erhält dieses Pokémon +150 KP."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Strong-Arm Lariat",
			'fr-fr': "Lasso Gros Bras",
			'es-es': "Lazo Brazos Fuertes",
			'it-it': "Lazo Forzuto",
			'pt-br': "Laço Corpulento",
			'de-de': "Erbarmungsloses Lasso"
		},

		effect: {
			'en-us': "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack.",
			'fr-fr': "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Puedes hacer 100 puntos de daño más. Si lo haces, durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Puoi infliggere 100 danni in più. Se lo fai, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674101,
				tcgplayer: 283974
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674101,
				tcgplayer: 283974
			}
		},
	],
}

export default card
