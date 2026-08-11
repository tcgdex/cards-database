import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'es-es': "Cofagrigus",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'de-de': "Echnatoll"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Six Feet Under",
				'fr-fr': "Pas de Quartier",
				'es-es': "Tres Metros Bajo Tierra",
				'it-it': "Sottoterra",
				'pt-br': "Sete Palmos sob a Terra",
				'de-de': "Radieschen von unten"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, put 3 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes dejar Fuera de Combate a este Pokémon. Si lo haces, pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere K.O. questo Pokémon. Se lo fai, distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode Nocautear este Pokémon. Se fizer isso, coloque 3 marcadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon kampfunfähig machen. Wenn du das machst, verteile 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Slap of Misfortune",
				'fr-fr': "Revers de Fortune",
			},
			effect: {
				'en-us': "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
				'fr-fr': "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.",
	},

	thirdParty: {
		cardmarket: 280934,
		tcgplayer: 84387
	}
}

export default card
