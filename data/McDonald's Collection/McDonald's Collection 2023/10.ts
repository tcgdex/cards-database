import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
		es: "Sandaconda",
		it: "Sandaconda",
		pt: "Sandaconda",
		de: "Sanaconda"
	},

	illustrator: "Yuya Oka",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [844],

	hp: 130,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja",
		es: "Silicobra",
		it: "Silicobra",
		pt: "Silicobra",
		de: "Salanga"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Sand Attack",
				fr: "Jet de Sable",
				es: "Ataque Arena",
				it: "Turbosabbia",
				pt: "Ataque de Areia",
				de: "Sandwirbel"
			},
			damage: 30,
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack doesn't happen.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, cette attaque échoue.",
				es: "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se produce.",
				it: "Se il Pokémon in difesa prova ad attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non viene effettuato.",
				pt: "Se o Pokémon Defensor tentar atacar durante o próximo turno do seu oponente, seu oponente joga 1 moeda. Se sair coroa, aquele ataque não acontece.",
				de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl schlägt die Attacke fehl."
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				en: "Sand Breath",
				fr: "Souffle de Sable",
				es: "Aliento de Arena",
				it: "Sabbiasoffio",
				pt: "Sopro de Areia",
				de: "Sandatem"
			},
			damage: 100,
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un'Energia da questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

