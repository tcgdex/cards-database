import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'es-mx': "Banette",
		'de-de': "Banette",
		'it-it': "Banette",
		'pt-br': "Banette"
	},

	illustrator: "Mugi Hamada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [354],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Shuppet"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hide 'n' Sneak",
			'fr-fr': "Cachette en Douce",
			'es-es': "Escondite a Hurtadillas",
			'es-mx': "Escondidas Furtivas",
			'de-de': "Listiges Versteckspiel",
			'it-it': "Nascondino Furbino",
			'pt-br': "Esconde-some"
		},

		effect: {
			'en-us': "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets des attaques et des talents des Pokémon de votre adversaire infligés à ce Pokémon. (Les dégâts ne sont pas un effet.)",
			'es-es': "Se evitan todos los efectos de los ataques y las habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'es-mx': "Se evitan todos los efectos de los ataques y las Habilidades de los Pokémon de tu rival infligidos a este Pokémon. (El daño no es un efecto).",
			'de-de': "Verhindere alle Effekte von Attacken und Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)",
			'it-it': "Previeni tutti gli effetti degli attacchi e delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques e Habilidades dos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Puppet Pull",
			'fr-fr': "Poupée Piocheuse",
			'es-es': "Tirón del Títere",
			'es-mx': "Hallazgo del Títere",
			'de-de': "Marionettenzieher",
			'it-it': "Richiamo del Pupazzo",
			'pt-br': "Puxão Fantoche"
		},

		cost: ["Psychic"],

		damage: 80,

		effect: {
			'en-us': "You may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo 1 carta y ponerla en tu mano. Después, baraja tu mazo.",
			'de-de': "Du kannst dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Você pode procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho."
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
				cardmarket: 895821,
				tcgplayer: 704791
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895821,
				tcgplayer: 704791
			}
		},
	],
}

export default card
