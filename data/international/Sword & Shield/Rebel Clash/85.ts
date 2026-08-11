import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Hatterene",
		'fr-fr': "Sorcilence",
		'es-es': "Hatterene",
		'it-it': "Hatterene",
		'pt-br': "Hatterene",
		'de-de': "Silembrim"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [858],
	set: Set,

	evolveFrom: {
		'en-us': "Hattrem",
		'fr-fr': "Chapotus",
		'es-es': "Hattrem",
		'it-it': "Hattrem",
		'pt-br': "Hattrem",
		'de-de': "Brimano"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mind Hat",
				'fr-fr': "Chapeau Mental",
				'es-es': "Sombrero Mental",
				'it-it': "Cappello Mentale",
				'pt-br': "Chapéu Mental",
				'de-de': "Gedankenhut"
			},
			effect: {
				'en-us': "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)",
				'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Chaque joueur défausse une carte de sa main. (Votre adversaire défausse en premier.)",
				'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Cada jugador descarta 1 carta de su mano. (Tu rival descarta primero).",
				'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Ciascun giocatore scarta una carta che ha in mano. Il tuo avversario scarta per primo.",
				'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Cada jogador descarta 1 carta da própria mão (seu oponente descarta primeiro).",
				'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Jeder Spieler legt 1 Karte aus seiner Hand auf seinen Ablagestapel. (Dein Gegner legt als Erster ab.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dripping Grudge",
				'fr-fr': "Rancune Dégoulinante",
				'es-es': "Goteo Rabioso",
				'it-it': "Gocce di Rancore",
				'pt-br': "Rancor Gotejante",
				'de-de': "Tropfender Groll"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
				'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival por cada Pokémon en tu pila de descartes.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario per ogni Pokémon nella tua pila degli scarti.",
				'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente para cada Pokémon na sua pilha de descarte.",
				'de-de': "Lege für jedes Pokémon in deinem Ablagestapel 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
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


	stage: "Stage2",

	description: {
		'en-us': "It emits psychic power strong enough to cause headaches as a deterrent to the approach of others."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457843,
				tcgplayer: 213171
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457843,
				tcgplayer: 213171
			}
		},
	],
}

export default card
