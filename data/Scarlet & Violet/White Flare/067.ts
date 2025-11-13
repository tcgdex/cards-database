import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [635],
	set: Set,

	name: {
		en: "Hydreigon ex",
		fr: "Trioxhydre-ex",
		de: "Trikephalo-ex",
		it: "Hydreigon-ex",
		pt: "Hydreigon ex",
		es: "Hydreigon ex",
		'es-mx': "Hydreigon ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		de: "Duodino",
		it: "Zweilous",
		pt: "Zweilous",
		es: "Zweilous",
		'es-mx': "Zweilous"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Greedy Eater",
			fr: "Mangeur Goulu",
			de: "Gieriger Esser",
			it: "Divoratore Ingordo",
			pt: "Fominha",
			es: "Hambre Voraz",
			'es-mx': "Voracidad Codiciosa"
		},

		effect: {
			en: "If your opponent's Basic Pokémon is Knocked Out by damage from an attack used by this Pokémon, take 1 more Prize card.",
			fr: "Si le Pokémon de base de votre adversaire est mis K.O. par les dégâts d'une attaque utilisée par ce Pokémon, récupérez une carte Récompense supplémentaire.",
			de: "Wenn das Basis-Pokémon deines Gegners durch Schaden einer von diesem Pokémon eingesetzten Attacke kampfunfähig wird, nimm 1 Preiskarte mehr.",
			it: "Se un Pokémon Base del tuo avversario viene messo KO dai danni inflitti da un attacco usato da questo Pokémon, prendi una carta Premio in più.",
			pt: "Se o Pokémon Básico do seu oponente for Nocauteado pelo dano de um ataque usado por este Pokémon, pegue 1 carta de Prêmio a mais.",
			es: "Si un Pokémon Básico de tu rival queda Fuera de Combate por el daño de un ataque usado por este Pokémon, coge 1 carta de Premio más.",
			'es-mx': "Si el Pokémon Básico de tu rival queda Fuera de Combate por el daño de un ataque usado por este Pokémon, toma 1 carta de Premio más."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			en: "Dark Bite",
			fr: "Morsure Obscure",
			de: "Finsterer Biss",
			it: "Morso Tenebroso",
			pt: "Mordida Sombria",
			es: "Mordisco Oscuro",
			'es-mx': "Mordida Oscura"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836027
	}
}

export default card