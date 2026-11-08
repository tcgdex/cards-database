import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hop's Trevenant",
		'fr-fr': "Desséliande de Nabil",
		'es-es': "Trevenant de Paul",
		'es-mx': "Trevenant de Paul",
		'de-de': "Hops Trombork",
		'it-it': "Trevenant di Hop",
		'pt-br': "Trevenant do Lupo"
	},

	evolveFrom: {
		'en-us': "Hop's Phantump",
		'fr-fr': "Brocélôme de Nabil",
		'es-es': "Phantump de Paul",
		'es-mx': "Phantump de Paul",
		'de-de': "Hops Paragoni",
		'it-it': "Phantump di Hop",
		'pt-br': "Phantump do Lupo",
	},

	illustrator: "matazo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Horrifying Revenge",
			'fr-fr': "Vengeance Horrifiante",
			'es-es': "Venganza Espeluznante",
			'es-mx': "Venganza Terrorífica",
			'de-de': "Grauenhafte Rache",
			'it-it': "Vendetta Orripilante",
			'pt-br': "Vingança Aterrorizante"
		},

		effect: {
			'en-us': "If any of your Hop's Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon de Nabil a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon de Paul quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon de Paul quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			'de-de': "Wenn mindestens 1 deiner Hops Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon di Hop è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 100 danni in più.",
			'pt-br': "Se algum dos seus Pokémon do Lupo tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 100 pontos de dano a mais."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'es-mx': "Arrinconar",
			'de-de': "Bedrängen",
			'it-it': "Trappola",
			'pt-br': "Quina"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
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
	regulationMark: "I",

	description: {
		'en-us': "Using its roots as a nervous system, it controls the trees in the forest. It’s kind to the Pokémon that reside in its body.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869707,
			tcgplayer: 675908
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870288,
			tcgplayer: 676928
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870287,
			tcgplayer: 677068
		}
	},
],
}

export default card