import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886455,
				tcgplayer: 693486
			}
		},
	],

	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		'es-mx': "Ferrothorn",
		de: "Tentantel",
		it: "Ferrothorn",
		pt: "Ferrothorn"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [598],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Ferroseed"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Startling Drop",
			fr: "Chute Surprenante",
			es: "Caída Sorpresa",
			'es-mx': "Caída Sorpresa",
			de: "Abrupter Abwurf",
			it: "Caduta Sorprendente",
			pt: "Queda Desconcertante"
		},

		effect: {
			en: "During your opponent's turn, if this Pokémon is discarded from your deck by an effect of an attack or Ability from your opponent's Pokémon, or by an effect of your opponent's Item or Supporter cards, discard the top 8 cards of your opponent's deck.",
			fr: "Pendant le tour de votre adversaire, si ce Pokémon est défaussé de votre deck par l'effet d'une attaque ou d'un talent de l'un des Pokémon de votre adversaire, ou par l'effet d'une carte Objet ou Supporter de votre adversaire, défaussez les 8 cartes du dessus du deck de votre adversaire.",
			es: "Durante el turno de tu rival, si se descarta este Pokémon de tu baraja por el efecto de un ataque o habilidad de los Pokémon de tu rival, o por el efecto de las cartas de Objeto o de Partidario de tu rival, descarta las 8 primeras cartas de la baraja de tu rival.",
			'es-mx': "Durante el turno de tu rival, si este Pokémon se descarta de tu mazo por el efecto de un ataque o Habilidad de los Pokémon de tu rival, o por el efecto de las cartas de Objeto o de Partidario de tu rival, descarta las primeras 8 cartas del mazo de tu rival.",
			de: "Wenn dieses Pokémon während des Zuges deines Gegners durch einen Effekt einer Attacke oder Fähigkeit von Pokémon deines Gegners oder durch einen Effekt von Item- oder Unterstützerkarten deines Gegners aus deinem Deck auf deinen Ablagestapel gelegt wird, lege die obersten 8 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Durante il turno del tuo avversario, se questo Pokémon viene scartato dal tuo mazzo per effetto di un attacco o un'abilità di un Pokémon del tuo avversario, o per effetto delle carte Strumento o carte Aiuto del tuo avversario, scarta le prime otto carte del mazzo del tuo avversario.",
			pt: "Durante o turno do seu oponente, se este Pokémon for descartado do seu baralho pelo efeito de um ataque ou Habilidade dos Pokémon do seu oponente, ou pelo efeito das cartas de Item ou Apoiador do seu oponente, descarte as 8 cartas de cima do baralho do seu oponente."
		}
	}],

	attacks: [{
		name: {
			en: "Special Whip",
			fr: "Fouet Spécial",
			es: "Látigo Especial",
			'es-mx': "Látigo Especial",
			de: "Spezialpeitsche",
			it: "Frustata Speciale",
			pt: "Chicotada Especial"
		},

		cost: ["Metal", "Metal"],
		damage: "70+",

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 70 more damage.",
			fr: "Si au moins une Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 70 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Energía Especial unida, este ataque hace 70 puntos de daño más.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 70 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 70 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",
}

export default card