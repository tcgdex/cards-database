import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké",
		'es-es': "Wobbuffet",
		'it-it': "Wobbuffet",
		'pt-br': "Wobbuffet",
		'de-de': "Woingenau"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shady Tail",
				'fr-fr': "Ombre Caudale",
				'es-es': "Cola Sombría",
				'it-it': "Coda Nera",
				'pt-br': "Cauda Umbrosa",
				'de-de': "Zwielichtiger Schweif"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, {*} (Prism Star) Pokémon in play (both yours and your opponent’s) can’t attack and have no Abilities.",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, les Pokémon {*} (Prisme Étoile) en jeu (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer et n’ont pas de talent.",
				'es-es': "Mientras este Pokémon esté en tu Banca, los Pokémon de {*} (Estrella Prisma) en juego (tanto tuyos como de tu rival) no pueden atacar y no tienen ninguna habilidad.",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, i Pokémon {*} (stella prisma) in gioco, sia tuoi che del tuo avversario, non possono attaccare e le loro abilità non hanno effetto.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, os Pokémon {*} (Estrela Prisma) em jogo (seus e do seu oponente) não poderão atacar e não terão Habilidades.",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, können {*}-Pokémon (Prisma-Stern-Pokémon) im Spiel (deine und die deines Gegners) nicht angreifen und haben keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'es-es': "Derribar",
				'it-it': "Scaraventa",
				'pt-br': "Jogar Longe",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "To keep its pitch-black tail hidden, it live quietly in the darkness. It is never first to attack.",
	},

	thirdParty: {
		cardmarket: 365730,
		tcgplayer: 178904
	}
}

export default card
