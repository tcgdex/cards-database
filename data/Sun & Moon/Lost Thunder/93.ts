import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		es: "Wobbuffet",
		it: "Wobbuffet",
		pt: "Wobbuffet",
		de: "Woingenau"
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
				en: "Shady Tail",
				fr: "Ombre Caudale",
				es: "Cola Sombría",
				it: "Coda Nera",
				pt: "Cauda Umbrosa",
				de: "Zwielichtiger Schweif"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, {*} (Prism Star) Pokémon in play (both yours and your opponent’s) can’t attack and have no Abilities.",
				fr: "Tant que ce Pokémon est sur votre Banc, les Pokémon {*} (Prisme Étoile) en jeu (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer et n’ont pas de talent.",
				es: "Mientras este Pokémon esté en tu Banca, los Pokémon de {*} (Estrella Prisma) en juego (tanto tuyos como de tu rival) no pueden atacar y no tienen ninguna habilidad.",
				it: "Fintanto che questo Pokémon è nella tua panchina, i Pokémon {*} (stella prisma) in gioco, sia tuoi che del tuo avversario, non possono attaccare e le loro abilità non hanno effetto.",
				pt: "Enquanto este Pokémon estiver no seu Banco, os Pokémon {*} (Estrela Prisma) em jogo (seus e do seu oponente) não poderão atacar e não terão Habilidades.",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, können {*}-Pokémon (Prisma-Stern-Pokémon) im Spiel (deine und die deines Gegners) nicht angreifen und haben keine Fähigkeiten."
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
				en: "Knock Away",
				fr: "Asticotage",
				es: "Derribar",
				it: "Scaraventa",
				pt: "Jogar Longe",
				de: "Zurückschlagen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
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



}

export default card
