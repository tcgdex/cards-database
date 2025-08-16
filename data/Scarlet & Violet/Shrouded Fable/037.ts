import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [1015],
	set: Set,

	name: {
		en: "Munkidori ex",
		fr: "Fortusimia-ex",
		es: "Munkidori ex",
		it: "Munkidori-ex",
		pt: "Munkidori ex",
		de: "Benesaru-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Oh No You Don't",
			fr: "Fausse Joie",
			es: "Va a Ser que No",
			it: "Ci Hai Provato",
			pt: "Nananinanão",
			de: "Von wegen"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, and if you have any Pecharunt ex in play, your opponent takes 1 fewer Prize card.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, et si vous avez au moins un Pêchaminus-ex en jeu, votre adversaire récupère une carte Récompense de moins.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival y tienes algún Pecharunt ex en juego, tu rival coge 1 carta de Premio menos.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario e hai in gioco dei Pecharunt-ex, il tuo avversario prende una carta Premio in meno.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente e se você tiver algum Pecharunt ex em jogo, seu oponente pegará 1 carta de Prêmio a menos.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird und wenn du mindestens 1 Infamomo-ex im Spiel hast, nimmt dein Gegner 1 Preiskarte weniger."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Dirty Headbutt",
			fr: "Coup d'Boule Abject",
			es: "Cabezazo Sucio",
			it: "Bottintesta Sleale",
			pt: "Cabeçada Inescrupulosa",
			de: "Fiese Kopfnuss"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Dirty Headbutt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup d'Boule Abject.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Cabezazo Sucio.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bottintesta Sleale.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Cabeçada Inescrupulosa.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Fiese Kopfnuss nicht einsetzen."
		},

		damage: 190
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "takuyoa",

	thirdParty: {
		cardmarket: 780932
	}
}

export default card
