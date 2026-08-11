import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Aya Kusube",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Last Gift",
			'fr-fr': "Dernier Geste",
			'es-es': "Último Regalo",
			'it-it': "Ultimo Dono",
			'pt-br': "Favor Final",
			'de-de': "Letztes Geschenk"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Pain Burst",
			'fr-fr': "Douleur Explosive",
			'es-es': "Estallido de Dolor",
			'it-it': "Infliggiscoppio",
			'pt-br': "Explosão Dolorosa",
			'de-de': "Schmerzwellen"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "It is said to emerge from darkness to steal the lives of those who become lost in mountains."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567137,
				tcgplayer: 241716
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567137,
				tcgplayer: 241716
			}
		},
	],
}

export default card
