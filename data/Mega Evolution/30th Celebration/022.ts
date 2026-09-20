import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents."
	},

	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
		de: "Lusardin",
		es: "Wishiwashi",
		it: "Wishiwashi",
		'es-mx': "Wishiwashi"
	},

	illustrator: "Narano",
	rarity: "Common",
	category: "Pokemon",
	dexId: [746],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack Grouping",
			fr: "Contre-Attaque Groupée",
			de: "Konterschwarm",
			es: "Contraataque Organizado",
			it: "Contrattacco Collettivo",
			'es-mx': "Contraataque Colectivo"
		},

		effect: {
			en: "If your Wishiwashi or Wishiwashi ex is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if your Pokémon		is Knocked Out), place 3 damage counters on the Attacking Pokémon.",
			fr: "Si l'un de vos Froussardine ou Froussardine-ex est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si votre Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
			de: "Wenn dein Lusardin oder Lusardin-ex in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dein Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon.",
			es: "Si tu Wishiwashi o Wishiwashi ex está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
			it: "Se il tuo Wishiwashi o Wishiwashi-ex è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
			'es-mx': "Si tu Wishiwashi o Wishiwashi ex está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante."
		}
	}],

	attacks: [{
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			de: "Überraschungsangriff",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			'es-mx': "Ataque Sorpresa"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'es-mx': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada."
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907629,
				tcgplayer: 716454
			}
		}
	],
}

export default card