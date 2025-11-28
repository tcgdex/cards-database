import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Gengar ex",
		fr: "Méga-Ectoplasma-ex",
		es: "Mega-Gengar ex",
		'es-mx': "Mega-Gengar ex",
		de: "Mega-Gengar-ex",
		it: "Mega Gengar-ex",
		pt: "Mega Gengar ex"
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [94],
	hp: 350,
	types: ["Darkness"],
	stage: "Stage2",
	dexId: [94],

	abilities: [{
		type: "Ability",

		name: {
			en: "Shadowy Concealment",
			fr: "Dissimulation Obscure",
			es: "Ocultación Sombría",
			'es-mx': "Ocultamiento Sombrío",
			de: "Schattenlist",
			it: "Occultamento Oscuro",
			pt: "Ocultação Sombria"
		},

		effect: {
			en: "If 1 of your {D} Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon ex, that player takes 1 fewer Prize card. The effect of Shadowy Concealment doesn't stack.",
			fr: "Si l'un de vos Pokémon {D} est mis K.O. par les dégâts d'une attaque de l'un des Pokémon-ex de votre adversaire, cette personne récupère une carte Récompense de moins. L'effet de Dissimulation Obscure n'est pas cumulable.",
			es: "Si uno de tus Pokémon {D} queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, ese jugador coge 1 carta de Premio menos. El efecto de Ocultación Sombría no se acumula.",
			'es-mx': "Si 1 de tus Pokémon {D} queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, ese jugador toma 1 carta de Premio menos. El efecto de Ocultamiento Sombrío no se acumula.",
			de: "Wenn 1 deiner {D}-Pokémon durch Schaden einer Attacke von Pokémon-ex deines Gegners kampfunfähig wird, nimmt jener Spieler 1 Preiskarte weniger. Der Effekt von Schattenlist stapelt sich nicht.",
			it: "Se uno dei tuoi Pokémon {D} viene messo KO dai danni inflitti da un attacco di un Pokémon-ex del tuo avversario, quel giocatore prende una carta Premio in meno. L'effetto di Occultamento Oscuro non è cumulabile.",
			pt: "Se 1 dos seus Pokémon {D} for Nocauteado pelo dano de um ataque dos Pokémon ex do seu oponente, aquele jogador pegará 1 carta de Prêmio a menos. O efeito de Ocultação Sombria não acumula."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Void Gale",
			fr: "Bourrasque du Néant",
			es: "Vendaval Vacuo",
			'es-mx': "Ráfaga Abismal",
			de: "Sturm der Leere",
			it: "Raffica Vacua",
			pt: "Vendaval Abissal"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco."
		},

		damage: 230
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857631
	}
}

export default card