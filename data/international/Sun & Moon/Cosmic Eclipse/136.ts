import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Guzzlord",
		'fr-fr': "Engloutyran",
		'es-es': "Guzzlord",
		'it-it': "Guzzlord",
		'pt-br': "Guzzlord",
		'de-de': "Schlingking"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		799,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Mountain Munch",
				'fr-fr': "Dévore-Montagne",
				'es-es': "Mascamontañas",
				'it-it': "Sgranocchiacime",
				'pt-br': "Masca-montanhas",
				'de-de': "Gipfelmampfer"
			},
			effect: {
				'en-us': "Discard the top card of your opponent’s deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a primeira carta do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte des Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Red Banquet",
				'fr-fr': "Festin Carmin",
				'es-es': "Banquete Rojo",
				'it-it': "Buffet Cremisi",
				'pt-br': "Banquete Vermelho",
				'de-de': "Rotes Festmahl"
			},
			effect: {
				'en-us': "If your opponent’s Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
				'es-es': "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
				'it-it': "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
				'pt-br': "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
				'de-de': "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Although it's alien to this world and a danger here, it's apparently a common organism in the world where it normally lives.",
	},

	thirdParty: {
		cardmarket: 408329,
		tcgplayer: 201180
	}
}

export default card
