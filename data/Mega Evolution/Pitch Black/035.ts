import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		'es-mx': "Spiritomb",
		de: "Kryppuk",
		it: "Spiritomb",
		pt: "Spiritomb"
	},

	illustrator: "danciao",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [442],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiritual End",
			fr: "Fin Spirite",
			es: "Fin Espiritual",
			'es-mx': "Final Espiritual",
			de: "Spirituelles Ende",
			it: "Finale Spirituale",
			pt: "Desfecho Espiritual"
		},

		cost: ["Psychic"],

		effect: {
			en: "If you have 13 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, choose 2 of your opponent's Pokémon and quadruple the number of damage counters on each of them.",
			fr: "Si vous avez au moins 13 Pokémon ayant le talent Cachette en Douce dans votre pile de défausse, choisissez 2 des Pokémon de votre adversaire et quadruplez le nombre de marqueurs de dégâts sur chacun d'eux.",
			es: "Si tienes en tu pila de descartes 13 Pokémon o más que tengan la habilidad Escondite a Hurtadillas, elige 2 de los Pokémon de tu rival y cuadruplica la cantidad de contadores de daño en cada uno de ellos.",
			'es-mx': "Si tienes 13 Pokémon o más que tengan la Habilidad Escondidas Furtivas en tu pila de descartes, elige 2 de los Pokémon de tu rival y cuadruplica la cantidad de contadores de daño en cada uno de ellos.",
			de: "Wenn du 13 oder mehr Pokémon, die die Fähigkeit Listiges Versteckspiel haben, in deinem Ablagestapel hast, wähle 2 Pokémon deines Gegners und vervierfache die Anzahl der Schadensmarken auf jedem von ihnen.",
			it: "Se hai 13 o più Pokémon che hanno l'abilità Nascondino Furbino nella tua pila degli scarti, scegli due dei Pokémon del tuo avversario e quadruplica il numero di segnalini danno su ciascuno di essi.",
			pt: "Se você tiver 13 ou mais Pokémon que têm a Habilidade Esconde-some na sua pilha de descarte, escolha 2 dos Pokémon do seu oponente e quadruplique o número de contadores de dano em cada um deles."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895822,
				tcgplayer: 704792
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895822,
				tcgplayer: 704792
			}
		},
	],
}

export default card
