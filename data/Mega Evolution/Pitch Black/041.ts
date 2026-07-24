import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Annihilape",
		fr: "Courrousinge",
		es: "Annihilape",
		'es-mx': "Annihilape",
		de: "Epitaff",
		it: "Annihilape",
		pt: "Annihilape"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [979],
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Primeape"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Durable Body",
			fr: "Corps Solide",
			es: "Cuerpo Resistente",
			'es-mx': "Cuerpo Resistente",
			de: "Durchhalten",
			it: "Duracorpo",
			pt: "Corpo Durável"
		},

		effect: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. et il lui reste 10 PV.",
			es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'es-mx': "Si este Pokémon quedaría Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate y ahora le quedan 10 PS.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			it: "Se questo Pokémon sta per essere messo KO dai danni inflitti da un attacco, lancia una moneta. Se esce testa, questo Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
			pt: "Se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque, jogue uma moeda. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10."
		}
	}],

	attacks: [{
		name: {
			en: "Ghostly Blow",
			fr: "Coup Spectral",
			es: "Estallido Fantasmal",
			'es-mx': "Trancazo Fantasmal",
			de: "Geisterhieb",
			it: "Spettrocolpo",
			pt: "Sova Fantasma"
		},

		cost: ["Psychic", "Psychic"],

		damage: 100,

		effect: {
			en: "Place 5 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Placez 5 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			es: "Pon 5 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			'es-mx': "Pon 5 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			de: "Lege 5 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners.",
			it: "Metti cinque segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Coloque 5 contadores de dano em 1 dos Pokémon no Banco do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895827,
				tcgplayer: 704798
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895827,
				tcgplayer: 704798
			}
		},
	],
}

export default card
