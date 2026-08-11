import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Banette",
		fr: "Branette",
		es: "Banette",
		'es-mx': "Banette",
		de: "Banette",
		it: "Banette",
		pt: "Banette"
	},

	illustrator: "Mugi Hamada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [354],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shuppet"
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
			en: "Puppet Pull",
			fr: "Poupée Piocheuse",
			es: "Tirón del Títere",
			'es-mx': "Hallazgo del Títere",
			de: "Marionettenzieher",
			it: "Richiamo del Pupazzo",
			pt: "Puxão Fantoche"
		},

		cost: ["Psychic"],

		damage: 80,

		effect: {
			en: "You may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck une carte, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Puedes buscar en tu baraja 1 carta y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo 1 carta y ponerla en tu mano. Después, baraja tu mazo.",
			de: "Du kannst dein Deck nach 1 Karte durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Puoi cercare nel tuo mazzo una carta e aggiungerla a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Você pode procurar por uma carta no seu baralho e colocá-la na sua mão. Em seguida, embaralhe o seu baralho."
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
