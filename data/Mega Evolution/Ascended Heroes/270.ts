import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Scrafty ex",
		fr: "Méga-Baggaïd-ex",
		es: "Mega-Scrafty ex",
		'es-mx': "Mega-Scrafty ex",
		de: "Mega-Irokex-ex",
		it: "Mega Scrafty-ex",
		pt: "Mega Scrafty ex"
	},

	illustrator: "Taiga Kasai",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [560],

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattacking Crest",
			fr: "Crête Contre-Attaque",
			es: "Cresta Contraataque",
			'es-mx': "Cresta de Contraataque",
			de: "Konterkamm",
			it: "Controcresta",
			pt: "Contra-ataque de Crista"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 5 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 5 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y recibe daño de un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 5 contadores de daño en el Pokémon Atacante.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 5 Schadensmarken auf das Angreifende Pokémon.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, metti cinque segnalini danno sul Pokémon attaccante.",
			pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 5 contadores de dano no Pokémon Atacante."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Outlaw Leg",
			fr: "Jeu de Jambes Criminel",
			es: "Patada de Forajido",
			'es-mx': "Patada Bandida",
			de: "Banditenbein",
			it: "Calcio Fuorilegge",
			pt: "Perna Bandida"
		},

		effect: {
			en: "Discard a random card from your opponent's hand. Discard the top card of your opponent's deck.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire. Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival. Descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival. Descarta la primera carta del mazo de tu rival.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel. Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta una carta a caso dalla mano del tuo avversario. Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente. Descarte a carta de cima do baralho do seu oponente."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676082,
		cardmarket: 869881
	}
}

export default card
