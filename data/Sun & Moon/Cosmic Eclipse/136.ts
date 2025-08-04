import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
		es: "Guzzlord",
		it: "Guzzlord",
		pt: "Guzzlord",
		de: "Schlingking"
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
				en: "Mountain Munch",
				fr: "Dévore-Montagne",
				es: "Mascamontañas",
				it: "Sgranocchiacime",
				pt: "Masca-montanhas",
				de: "Gipfelmampfer"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a primeira carta do baralho do seu oponente.",
				de: "Lege die oberste Karte des Deck deines Gegners auf seinen Ablagestapel."
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
				en: "Red Banquet",
				fr: "Festin Carmin",
				es: "Banquete Rojo",
				it: "Buffet Cremisi",
				pt: "Banquete Vermelho",
				de: "Rotes Festmahl"
			},
			effect: {
				en: "If your opponent’s Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
				es: "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
				it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
				pt: "Se o Pokémon do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
				de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
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

	thirdParty: {
		cardmarket: 408329,
		tcgplayer: 201180
	}
}

export default card
