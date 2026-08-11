import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Koraidon ex",
		'fr-fr': "Koraidon-ex",
		'es-es': "Koraidon ex",
		'es-mx': "Koraidon ex",
		'de-de': "Koraidon-ex",
		'it-it': "Koraidon-ex",
		'pt-br': "Koraidon ex"
	},

	suffix: "ex",
	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Orichalcum Fang",
			'fr-fr': "Croc Orichalque",
			'es-es': "Colmillo Oricalco",
			'es-mx': "Colmillo Oricalco",
			'de-de': "Orichalkum-Fänge",
			'it-it': "Zanna d'Oricalco",
			'pt-br': "Presas de Oricalco"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 120 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais."
		},

		damage: "50+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Impact Blow",
			'fr-fr': "Coup à Impact",
			'es-es': "Golpe Impactante",
			'es-mx': "Golpe Impactante",
			'de-de': "Einschlag",
			'it-it': "Colpoimpatto",
			'pt-br': "Golpe Impactante"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Impact Blow.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869732,
				tcgplayer: 675933
			}
		}
	],
}

export default card
