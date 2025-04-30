import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d'Alola",
		es: "Marowak de Alola",
		de: "Alola-Knogga",
		it: "Marowak di Alola",
		pt: "Marowak de Alola",
		'es-mx': "Marowak de Alola"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Retaliate",
			fr: "Vengeance",
			es: "Represalia",
			de: "Heimzahlung",
			it: "Nemesi",
			pt: "Retaliação",
			'es-mx': "Represalia"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			de: "Irrlicht",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
