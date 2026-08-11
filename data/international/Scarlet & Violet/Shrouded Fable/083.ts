import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [1015],
	set: Set,

	name: {
		'en-us': "Munkidori ex",
		'fr-fr': "Fortusimia-ex",
		'es-es': "Munkidori ex",
		'it-it': "Munkidori-ex",
		'pt-br': "Munkidori ex",
		'de-de': "Benesaru-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Oh No You Don't",
			'fr-fr': "Fausse Joie",
			'es-es': "Va a Ser que No",
			'it-it': "Ci Hai Provato",
			'pt-br': "Nananinanão",
			'de-de': "Von wegen"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, and if you have any Pecharunt ex in play, your opponent takes 1 fewer Prize card.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, et si vous avez au moins un Pêchaminus-ex en jeu, votre adversaire récupère une carte Récompense de moins.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival y tienes algún Pecharunt ex en juego, tu rival coge 1 carta de Premio menos.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario e hai in gioco dei Pecharunt-ex, il tuo avversario prende una carta Premio in meno.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente e se você tiver algum Pecharunt ex em jogo, seu oponente pegará 1 carta de Prêmio a menos.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird und wenn du mindestens 1 Infamomo-ex im Spiel hast, nimmt dein Gegner 1 Preiskarte weniger."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Dirty Headbutt",
			'fr-fr': "Coup d'Boule Abject",
			'es-es': "Cabezazo Sucio",
			'it-it': "Bottintesta Sleale",
			'pt-br': "Cabeçada Inescrupulosa",
			'de-de': "Fiese Kopfnuss"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Dirty Headbutt.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup d'Boule Abject.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Cabezazo Sucio.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Bottintesta Sleale.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Cabeçada Inescrupulosa.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Fiese Kopfnuss nicht einsetzen."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	suffix: "ex",
	illustrator: "5ban Graphics",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780978,
				tcgplayer: 560394
			}
		},
	],
}

export default card
