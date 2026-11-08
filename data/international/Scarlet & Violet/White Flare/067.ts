import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [635],
	set: Set,

	name: {
		'en-us': "Hydreigon ex",
		'fr-fr': "Trioxhydre-ex",
		'de-de': "Trikephalo-ex",
		'it-it': "Hydreigon-ex",
		'pt-br': "Hydreigon ex",
		'es-es': "Hydreigon ex",
		'es-mx': "Hydreigon ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'de-de': "Duodino",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'es-es': "Zweilous",
		'es-mx': "Zweilous"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Greedy Eater",
			'fr-fr': "Mangeur Goulu",
			'de-de': "Gieriger Esser",
			'it-it': "Divoratore Ingordo",
			'pt-br': "Fominha",
			'es-es': "Hambre Voraz",
			'es-mx': "Voracidad Codiciosa"
		},

		effect: {
			'en-us': "If your opponent's Basic Pokémon is Knocked Out by damage from an attack used by this Pokémon, take 1 more Prize card.",
			'fr-fr': "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts d'une attaque utilisée par ce Pokémon, récupérez une carte Récompense supplémentaire.",
			'de-de': "Wenn das Basis-Pokémon deines Gegners durch Schaden einer von diesem Pokémon eingesetzten Attacke kampfunfähig wird, nimm 1 Preiskarte mehr.",
			'it-it': "Se un Pokémon Base del tuo avversario viene messo KO dai danni inflitti da un attacco usato da questo Pokémon, prendi una carta Premio in più.",
			'pt-br': "Se o Pokémon Básico do seu oponente for Nocauteado pelo dano de um ataque usado por este Pokémon, pegue 1 carta de Prêmio a mais.",
			'es-es': "Si un Pokémon Básico de tu rival queda Fuera de Combate por el daño de un ataque usado por este Pokémon, coge 1 carta de Premio más.",
			'es-mx': "Si el Pokémon Básico de tu rival queda Fuera de Combate por el daño de un ataque usado por este Pokémon, toma 1 carta de Premio más."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Dark Bite",
			'fr-fr': "Morsure Obscure",
			'de-de': "Finsterer Biss",
			'it-it': "Morso Tenebroso",
			'pt-br': "Mordida Sombria",
			'es-es': "Mordisco Oscuro",
			'es-mx': "Mordida Oscura"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836027,
				tcgplayer: 642177
			}
		},
	],
}

export default card
