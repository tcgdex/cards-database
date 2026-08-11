import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	stage: "Stage1",

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
				'en-us': "Dredge",
				'fr-fr': "Débourbage",
				'es-es': "Dragar",
				'it-it': "Draga",
				'pt-br': "Draga",
				'de-de': "Tiefbagger"
			},
			effect: {
				'en-us': "Search your deck for 2 Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez 2 cartes Énergie dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 2 cartas de Energía y únelas a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo due carte Energia e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho 2 cards de Energia e ligue-os a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 2 Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Instagriffe",
				'es-es': "Garra Mach",
				'it-it': "Artiglio Mach",
				'pt-br': "Garra Supersônica",
				'de-de': "Tempoklaue"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "Il danno di questo attacco non è influenzato dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
	},

	thirdParty: {
		cardmarket: 273627,
		tcgplayer: 95995
	}
}

export default card
