import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Night Roam",
				fr: "Errance Nocturne",
				es: "Deambular en la Noche",
				it: "Girovago Notturno",
				pt: "Vagar pela Noite",
				de: "Nachtstreuner"
			},
			effect: {
				en: "Put 1 damage counter on each Pokémon (both yours and your opponent’s).",
				fr: "Placez 1 marqueur de dégâts sur chaque Pokémon (les vôtres et ceux de votre adversaire).",
				es: "Pon 1 contador de daño en cada Pokémon (tanto tuyos como de tu rival).",
				it: "Metti un segnalino danno su tutti i Pokémon, sia tuoi che del tuo avversario.",
				pt: "Coloque 1 contador de dano em cada Pokémon (seus e do seu oponente).",
				de: "Lege 1 Schadensmarke auf jedes Pokémon (deine und die deines Gegners)."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
				es: "Emboscada",
				it: "Imboscata",
				pt: "Emboscada",
				de: "Hinterhalt"
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
	retreat: 3,



}

export default card
