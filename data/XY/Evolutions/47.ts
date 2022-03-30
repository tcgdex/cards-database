import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Little Grudge",
				fr: "Petite Rancune",
				es: "Pequeña Rabieta",
				it: "Broncetto",
				pt: "Pequeno Rancor",
				de: "Kleiner Groll"
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is Knocked Out by damage from an attack, discard an Energy attached to the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O. par les dégâts d'une attaque, défaussez une Énergie attachée au Pokémon Attaquant.",
				es: "Durante el próximo turno de tu rival, si este Pokémon queda Fuera de Combate por el daño de un ataque, descarta 1 Energía unida al Pokémon Atacante.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene messo KO dai danni inflitti da un attacco, scarta un'Energia assegnata al Pokémon attaccante.",
				pt: "Durante a próxima vez de jogar do seu oponente, se este Pokémon for Nocauteado por danos causados por um ataque, descarte uma Energia ligada ao Pokémon Atacante.",
				de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch Schaden eines Angriffs kampfunfähig wird, lege 1 an das Angreifende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
				es: "Pesadilla",
				it: "Incubo",
				pt: "Pesadelo",
				de: "Nachtmahr"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt."
			},
			damage: 20,

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
