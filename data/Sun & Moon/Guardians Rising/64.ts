import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Daunting Pose",
				fr: "Attitude Patibulaire",
				es: "Pose Intimidante",
				it: "Posa Imponente",
				pt: "Pose Intimidante",
				de: "Ablehnende Haltung"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent’s attacks. Your opponent’s attacks and Abilities can’t put damage counters on your Benched Pokémon.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire. Les attaques et les talents de votre adversaire ne peuvent pas placer de marqueurs de dégâts sur vos Pokémon de Banc.",
				es: "Evita todo el daño infligido a tus Pokémon en Banca por ataques de tu rival. Los ataques y las habilidades de tu rival no pueden poner contadores de daño en tus Pokémon en Banca.",
				it: "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi del tuo avversario. Gli attacchi e le abilità del tuo avversario non possono farti assegnare segnalini danno ai tuoi Pokémon in panchina.",
				pt: "Previne todo o dano causado aos seus Pokémon no Banco pelos ataques do seu oponente. Os ataques e as Habilidades do seu oponente não podem colocar contadores de dano nos seus Pokémon no Banco.",
				de: "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken deines Gegners zugefügt wird. Durch Attacken und Fähigkeiten deines Gegners können keine Schadensmarken auf die Pokémon auf deiner Bank gelegt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Cross Chop",
				fr: "Coup-Croix",
				es: "Tajo Cruzado",
				it: "Incrocolpo",
				pt: "Golpe Cruzado",
				de: "Kreuzhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
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

	retreat: 3,



}

export default card
