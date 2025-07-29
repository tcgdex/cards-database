import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
		es: "Sandslash de Alola",
		it: "Sandslash di Alola",
		pt: "Sandslash de Alola",
		de: "Alola-Sandamer"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Spike Armor",
				fr: "Armure Piquante",
				es: "Armadura de Espinas",
				it: "Corazza Ispida",
				pt: "Armadura de Espinhos",
				de: "Stachelpanzer"
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti sei segnalini danno sul Pokémon attaccante.",
				pt: "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 6 contadores de dano no Pokémon Atacante.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
				es: "Vaho Gélido",
				it: "Alitogelido",
				pt: "Respiração de Gelo",
				de: "Eisesodem"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 315960
	}
}

export default card
