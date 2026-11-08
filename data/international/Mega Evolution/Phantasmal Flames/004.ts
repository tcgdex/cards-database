import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Heracross ex",
		'fr-fr': "Méga-Scarhino-ex",
		'es-es': "Mega-Heracross ex",
		'es-mx': "Mega-Heracross ex",
		'de-de': "Mega-Skaraborn-ex",
		'it-it': "Mega Heracross-ex",
		'pt-br': "Mega Heracross ex"
	},

	rarity: "Double rare",
	category: "Pokemon",

	dexId: [214],
	hp: 280,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Juggernaut Horn",
			'fr-fr': "Corne Mastodonte",
			'es-es': "Cuerno Acorazado",
			'es-mx': "Cuerno Blindado",
			'de-de': "Panzerhorn",
			'it-it': "Corno Panzer",
			'pt-br': "Chifre Maciço"
		},

		effect: {
			'en-us': "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			'fr-fr': "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			'es-es': "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			'es-mx': "Si este Pokémon recibió daño de un ataque durante el último turno de tu rival, este ataque hace esa cantidad de puntos de daño más.",
			'de-de': "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu.",
			'it-it': "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
			'pt-br': "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais."
		},

		damage: "100+"
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'en-us': "Mountain Ramming",
			'fr-fr': "Pousse-Montagnes",
			'es-es': "Empuje Montaña",
			'es-mx': "Empuje Montañoso",
			'de-de': "Bergramme",
			'it-it': "Speronamonte",
			'pt-br': "Colisão Montanhosa"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857579,
				tcgplayer: 662186,
				cardtrader: 356788
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}]
}

export default card

