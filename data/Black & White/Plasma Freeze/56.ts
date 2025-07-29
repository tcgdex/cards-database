import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
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
		en: "Yamask",
		fr: "Tutafeh",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Six Feet Under",
				fr: "Pas de Quartier",
				es: "Tres Metros Bajo Tierra",
				it: "Sottoterra",
				pt: "Sete Palmos sob a Terra",
				de: "Radieschen von unten"
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes dejar Fuera de Combate a este Pokémon. Si lo haces, pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere K.O. questo Pokémon. Se lo fai, distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode Nocautear este Pokémon. Se fizer isso, coloque 3 marcadores de danos nos Pokémon do seu oponente do jeito que desejar.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon kampfunfähig machen. Wenn du das machst, verteile 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
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
				en: "Slap of Misfortune",
				fr: "Revers de Fortune",
			},
			effect: {
				en: "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
				fr: "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
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

	thirdParty: {
		cardmarket: 280934
	}
}

export default card
