import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Scrafty ex",
		'fr-fr': "Méga-Baggaïd-ex",
		'es-es': "Mega-Scrafty ex",
		'es-mx': "Mega-Scrafty ex",
		'de-de': "Mega-Irokex-ex",
		'it-it': "Mega Scrafty-ex",
		'pt-br': "Mega Scrafty ex"
	},
	evolveFrom: {
		'en-us': "Scraggy",
		'de-de': "Zurrokex",
		'es-es': "Scraggy",
		'es-mx': "Scraggy",
		'fr-fr': "Baggiguane",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [560],
	hp: 330,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Counterattacking Crest",
			'fr-fr': "Crête Contre-Attaque",
			'es-es': "Cresta Contraataque",
			'es-mx': "Cresta de Contraataque",
			'de-de': "Konterkamm",
			'it-it': "Controcresta",
			'pt-br': "Contra-ataque de Crista"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 5 damage counters on the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 5 Schadensmarken auf das Angreifende Pokémon.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti cinque segnalini danno sul Pokémon attaccante.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 5 contadores de dano no Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Outlaw Leg",
			'fr-fr': "Jeu de Jambes Criminel",
			'es-es': "Patada de Forajido",
			'es-mx': "Patada Bandida",
			'de-de': "Banditenbein",
			'it-it': "Calcio Fuorilegge",
			'pt-br': "Perna Bandida"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand. Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire. Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival. Descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival. Descarta la primera carta del mazo de tu rival.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel. Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario. Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente. Descarte a carta de cima do baralho do seu oponente."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869746,
				tcgplayer: 675947
			}
		}
	],
}

export default card
