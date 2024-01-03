import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sorcilence",
		en: "Hatterene",
		es: "Hatterene",
		it: "Hatterene",
		pt: "Hatterene",
		de: "Silembrim"
	},

	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Chapotus",
		en: "Hattrem"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Chapeau Mental",
			en: "Mind Hat",
			es: "Sombrero Mental",
			it: "Cappello Mentale",
			pt: "Chapéu Mental",
			de: "Gedankenhut"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Chaque joueur défausse une carte de sa main. (Votre adversaire défausse en premier.)",
			en: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Cada jugador descarta 1 carta de su mano. (Tu rival descarta primero).",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Ciascun giocatore scarta una carta che ha in mano. Il tuo avversario scarta per primo.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Cada jogador descarta 1 carta da própria mão (seu oponente descarta primeiro).",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Jeder Spieler legt 1 Karte aus seiner Hand auf seinen Ablagestapel. (Dein Gegner legt als Erster ab.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Rancune Dégoulinante",
			en: "Dripping Grudge",
			es: "Goteo Rabioso",
			it: "Gocce di Rancore",
			pt: "Rancor Gotejante",
			de: "Tropfender Groll"
		},

		effect: {
			fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse.",
			en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
			es: "Pon 1 contador de daño en el Pokémon Activo de tu rival por cada Pokémon en tu pila de descartes.",
			it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario per ogni Pokémon nella tua pila degli scarti.",
			pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente para cada Pokémon na sua pilha de descarte.",
			de: "Lege für jedes Pokémon in deinem Ablagestapel 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage2",

	description: {
		en: "It emits psychic power strong enough to cause headaches as a deterrent to the approach of others."
	}
}

export default card
