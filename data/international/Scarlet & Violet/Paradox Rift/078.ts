import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [711],
	set: Set,

	name: {
		'en-us': "Gourgeist",
		'fr-fr': "Banshitrouye",
		'es-es': "Gourgeist",
		'it-it': "Gourgeist",
		'pt-br': "Gourgeist",
		'de-de': "Pumpdjinn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Startling Pumpkin",
			'fr-fr': "Citrouille Surprise",
			'es-es': "Calabaza Sorprendente",
			'it-it': "Zuccaspavento",
			'pt-br': "Abóbora Assustadora",
			'de-de': "Kürbisschreck"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, discard 2 random cards from your opponent's hand.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, défaussez 2 cartes au hasard de la main de votre adversaire.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, descarta 2 cartas aleatorias de la mano de tu rival.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, scarta due carte a caso dalla mano del tuo avversario.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, descarte 2 cartas aleatórias da mão do seu oponente.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, lege 2 zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Shadow Bind",
			'fr-fr': "Étreinte d'Ombre",
			'es-es': "Atadura Sombría",
			'it-it': "Legami d'Ombra",
			'pt-br': "Aprisionamento Sombrio",
			'de-de': "Schattenbindung"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "In the darkness of a new-moon night, Gourgeist will come knocking. Whoever answers the door will be swept off to the afterlife.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740570,
				tcgplayer: 523744,
				cardtrader: 265184
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740570,
				tcgplayer: 523744,
				cardtrader: 265184
			}
		},
	],

	illustrator: "nisimono",

	
}

export default card
