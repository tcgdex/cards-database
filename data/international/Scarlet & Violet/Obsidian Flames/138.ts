import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [687],
	set: Set,

	name: {
		'fr-fr': "Sepiatroce",
		'en-us': "Malamar",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Sepiatop",
		'en-us': "Inkay",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Vue Psy",
			'en-us': "Psychic Insight",
			'es-es': "Intuición Psíquica",
			'it-it': "Psicointuito",
			'pt-br': "Percepção Psíquica",
			'de-de': "Psycho-Einsicht"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez regarder la carte du dessus du deck de votre adversaire. Dans ce cas, regardez la carte du dessus de votre deck.",
			'en-us': "Once during your turn, you may look at the top card of your opponent's deck. If you do, look at the top card of your deck.",
			'es-es': "Una vez durante tu turno, puedes mirar la primera carta de la baraja de tu rival. Si lo haces, mira la primera carta de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi guardare la prima carta del mazzo del tuo avversario. Se lo fai, guarda la prima carta del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá olhar a carta de cima do baralho do seu oponente. Se fizer isto, olhe a carta de cima do seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dir die oberste Karte des Decks deines Gegners anschauen. Wenn du das machst, schau dir die oberste Karte deines Decks an."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Onde Hypnotique",
			'en-us': "Hypnotic Ray",
			'es-es': "Rayo Hipnótico",
			'it-it': "Ipnoraggio",
			'pt-br': "Raio Hipnótico",
			'de-de': "Hypnotischer Strahl"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It's said that Malamar's hypnotic powers played a role in certain history-changing events.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725218,
				tcgplayer: 509909,
				cardtrader: 255823
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725218,
				tcgplayer: 509909,
				cardtrader: 255823
			}
		},
	],

	illustrator: "Nelnal",

	
}

export default card
