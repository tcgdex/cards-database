import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Hatterene",
		fr: "Sorcilence",
		es: "Hatterene",
		it: "Hatterene",
		pt: "Hatterene",
		de: "Silembrim"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Hattrem",
		fr: "Chapotus",
		es: "Hattrem",
		it: "Hattrem",
		pt: "Hattrem",
		de: "Brimano"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mind Hat",
				fr: "Chapeau Mental",
				es: "Sombrero Mental",
				it: "Cappello Mentale",
				pt: "Chapéu Mental",
				de: "Gedankenhut"
			},
			effect: {
				en: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)",
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Chaque joueur défausse une carte de sa main. (Votre adversaire défausse en premier.)",
				es: "Una vez durante tu turno, puedes usar esta habilidad. Cada jugador descarta 1 carta de su mano. (Tu rival descarta primero).",
				it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Ciascun giocatore scarta una carta che ha in mano. Il tuo avversario scarta per primo.",
				pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Cada jogador descarta 1 carta da própria mão (seu oponente descarta primeiro).",
				de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Jeder Spieler legt 1 Karte aus seiner Hand auf seinen Ablagestapel. (Dein Gegner legt als Erster ab.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dripping Grudge",
				fr: "Rancune Dégoulinante",
				es: "Goteo Rabioso",
				it: "Gocce di Rancore",
				pt: "Rancor Gotejante",
				de: "Tropfender Groll"
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse.",
				es: "Pon 1 contador de daño en el Pokémon Activo de tu rival por cada Pokémon en tu pila de descartes.",
				it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario per ogni Pokémon nella tua pila degli scarti.",
				pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente para cada Pokémon na sua pilha de descarte.",
				de: "Lege für jedes Pokémon in deinem Ablagestapel 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 150,
	types: ["Psychic"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It emits psychic power strong enough to cause headaches as a deterrent to the approach of others."
	}
}

export default card
