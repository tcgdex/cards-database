import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [105],
	set: Set,

	name: {
		'en-us': "Alolan Marowak",
		'fr-fr': "Ossatueur d'Alola",
		'es-es': "Marowak de Alola",
		'de-de': "Alola-Knogga",
		'it-it': "Marowak di Alola",
		'pt-br': "Marowak de Alola",
		'es-mx': "Marowak de Alola"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'de-de': "Tragosso",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'es-mx': "Cubone"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Retaliate",
			'fr-fr': "Vengeance",
			'es-es': "Represalia",
			'de-de': "Heimzahlung",
			'it-it': "Nemesi",
			'pt-br': "Retaliação",
			'es-mx': "Represalia"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'de-de': "Irrlicht",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Uta",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817209,
				tcgplayer: 623484
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817209,
				tcgplayer: 623484
			}
		},
	],
}

export default card
