import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Gengar ex",
		'fr-fr': "Méga-Ectoplasma-ex",
		'es-es': "Mega-Gengar ex",
		'es-mx': "Mega-Gengar ex",
		'de-de': "Mega-Gengar-ex",
		'it-it': "Mega Gengar-ex",
		'pt-br': "Mega Gengar ex"
	},
	evolveFrom: {
		'en-us': "Haunter",
		'de-de': "Alpollo",
		'es-es': "Haunter",
		'es-mx': "Haunter",
		'fr-fr': "Spectrum",
		'it-it': "Haunter",
		'pt-br': "Haunter",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [94],
	hp: 350,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shadowy Concealment",
			'fr-fr': "Dissimulation Obscure",
			'es-es': "Ocultación Sombría",
			'es-mx': "Ocultamiento Sombrío",
			'de-de': "Schattenlist",
			'it-it': "Occultamento Oscuro",
			'pt-br': "Ocultação Sombria"
		},

		effect: {
			'en-us': "If 1 of your {D} Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon ex, that player takes 1 fewer Prize card. The effect of Shadowy Concealment doesn't stack.",
			'fr-fr': "Si l'un de vos Pokémon {D} est mis K.O. par les dégâts d'une attaque de l'un des Pokémon-ex de votre adversaire, cette personne récupère une carte Récompense de moins. L'effet de Dissimulation Obscure n'est pas cumulable.",
			'es-es': "Si uno de tus Pokémon {D} queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, ese jugador coge 1 carta de Premio menos. El efecto de Ocultación Sombría no se acumula.",
			'es-mx': "Si 1 de tus Pokémon {D} queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, ese jugador toma 1 carta de Premio menos. El efecto de Ocultamiento Sombrío no se acumula.",
			'de-de': "Wenn 1 deiner {D}-Pokémon durch Schaden einer Attacke von Pokémon-ex deines Gegners kampfunfähig wird, nimmt jener Spieler 1 Preiskarte weniger. Der Effekt von Schattenlist stapelt sich nicht.",
			'it-it': "Se uno dei tuoi Pokémon {D} viene messo KO dai danni inflitti da un attacco di un Pokémon-ex del tuo avversario, quel giocatore prende una carta Premio in meno. L'effetto di Occultamento Oscuro non è cumulabile.",
			'pt-br': "Se 1 dos seus Pokémon {D} for Nocauteado pelo dano de um ataque dos Pokémon ex do seu oponente, aquele jogador pegará 1 carta de Prêmio a menos. O efeito de Ocultação Sombria não acumula."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Void Gale",
			'fr-fr': "Bourrasque du Néant",
			'es-es': "Vendaval Vacuo",
			'es-mx': "Ráfaga Abismal",
			'de-de': "Sturm der Leere",
			'it-it': "Raffica Vacua",
			'pt-br': "Vendaval Abissal"
		},

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869736,
				tcgplayer: 675937
			}
		}
	],
}

export default card
