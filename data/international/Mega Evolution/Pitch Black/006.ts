import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Sinistcha",
		fr: "Théffroyable",
		es: "Sinistcha",
		'es-mx': "Sinistcha",
		de: "Fatalitcha",
		it: "Sinistcha",
		pt: "Sinistcha"
	},

	illustrator: "mingo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1013],
	hp: 60,
	types: ["Grass"],

	evolveFrom: {
		en: "Poltchageist"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hide 'n' Sneak",
			fr: "Cachette en Douce",
			es: "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas",
			de: "Listiges Versteckspiel",
			it: "Nascondino Furbino",
			pt: "Esconde-some"
		},

		effect: {
			en: "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)",
			fr: "Évitez tous les effets des attaques et des talents des Pokémon de votre adversaire infligés à ce Pokémon. (Les dégâts ne sont pas un effet.)",
			es: "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las Habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			de: "Verhindere alle Effekte von Attacken und Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			it: "Previeni tutti gli effetti degli attacchi e delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			pt: "Previna todos os efeitos de ataques e Habilidades dos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		name: {
			en: "Matcha Spin",
			fr: "Pirouette Matcha",
			es: "Giro Matcha",
			'es-mx': "Giro de Matcha",
			de: "Matchawirbel",
			it: "Giratè",
			pt: "Giro Matcha"
		},

		cost: ["Colorless"],

		effect: {
			en: "If you have 6 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, place 4 damage counters on each of your opponent's Pokémon.",
			fr: "Si vous avez au moins 6 Pokémon ayant le talent Cachette en Douce dans votre pile de défausse, placez 4 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			es: "Si tienes en tu pila de descartes 6 Pokémon o más que tengan la habilidad Escondite a Hurtadillas, pon 4 contadores de daño en cada uno de los Pokémon de tu rival.",
			'es-mx': "Si tienes 6 Pokémon o más que tengan la Habilidad Escondidas Furtivas en tu pila de descartes, pon 4 contadores de daño en cada uno de los Pokémon de tu rival.",
			de: "Wenn du 6 oder mehr Pokémon, die die Fähigkeit Listiges Versteckspiel haben, in deinem Ablagestapel hast, lege 4 Schadensmarken auf jedes Pokémon deines Gegners.",
			it: "Se hai sei o più Pokémon che hanno l'abilità Nascondino Furbino nella tua pila degli scarti, metti quattro segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			pt: "Se você tiver 6 ou mais Pokémon que têm a Habilidade Esconde-some na sua pilha de descarte, coloque 4 contadores de dano em cada um dos Pokémon do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895794,
				tcgplayer: 704763
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895794,
				tcgplayer: 704763
			}
		},
	],
}

export default card
