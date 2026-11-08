import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		659,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Offensive Ω",
				'en-us': "Ω Barrage",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
				'en-us': "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)",
				'es-es': "{title}: Este Pokémon puede atacar 2 veces por turno. (Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo).",
				'it-it': "{title}: Questo Pokémon può attaccare due volte durante lo stesso turno. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario avrà scelto il suo nuovo Pokémon attivo.",
				'pt-br': "{title}: Este Pokémon pode atacar duas vezes por turno. (Se o primeiro ataque Nocautear o Pokémon Ativo de seu oponente, você deve atacar de novo assim que seu oponente escolher um novo Pokémon Ativo).",
				'de-de': "{title}: Dieses Pokémon kann während eines Zuges zweimal angreifen. (Falls der erste Angriff das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon ausgewählt hat.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Burrow",
				'fr-fr': "Terrier",
				'es-es': "Escarbar",
				'it-it': "Buca",
				'pt-br': "Toca",
				'de-de': "Verbuddeln"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la carta in cima al mazzo del tuo avversario.",
				'pt-br': "Descarte o card de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rototiller",
				'fr-fr': "Fertilisation",
				'es-es': "Fertilizante",
				'it-it': "Aracampo",
				'pt-br': "Rototiller",
				'de-de': "Pflüger"
			},
			effect: {
				'en-us': "Shuffle a card from your discard pile into your deck.",
				'fr-fr': "Mélangez une carte de votre pile de défausse avec votre deck.",
				'es-es': "Pon 1 carta de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Rimischia una carta dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe um card da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 1 Karte aus deinem Ablagestapel in dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has ears like shovels. Digging holes strengthens its ears so much that they can sever thick roots effortlessly.",
	},

	thirdParty: {
		cardmarket: 273651,
		tcgplayer: 96019
	}
}

export default card
