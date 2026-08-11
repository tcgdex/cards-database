import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'es-es': "Torchic",
		'it-it': "Torchic",
		'pt-br': "Torchic",
		'de-de': "Flemmli"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 50,

	types: [
		"Fire",
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
				"Fire",
			],
			name: {
				'en-us': "Flare Bonus",
				'fr-fr': "Fulmi-Bonus",
				'es-es': "Bonus de Llama",
				'it-it': "Bonus Fiammata",
				'pt-br': "Bônus Explosivo",
				'de-de': "Flammenbonus"
			},
			effect: {
				'en-us': "Discard a Fire Energy card from your hand. If you do, draw 2 cards.",
				'fr-fr': "Défaussez une carte Énergie Fire de votre main. Dans ce cas, piochez 2 cartes.",
				'es-es': "Descarta 1 carta de Energía Fire de tu mano. Si lo haces, roba 2 cartas.",
				'it-it': "Scarta una carta Energia Fire presente tra le carte che hai in mano. Se lo fai, pesca due carte.",
				'pt-br': "Descarte um card de Energia Fire da sua mão. Se fizer isso, compre 2 cards.",
				'de-de': "Lege 1 Fire-Energie aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Claw",
				'fr-fr': "Ergots",
				'es-es': "Garra",
				'it-it': "Artiglio",
				'pt-br': "Garra",
				'de-de': "Klaue"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue uma moeda. Se sair coroa, esse ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 273556,
		tcgplayer: 95918
	}
}

export default card
