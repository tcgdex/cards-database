import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos",
		de: "Ampharos"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shocking Light",
				fr: "Lumière Choquante",
				es: "Luz Electrizante",
				it: "Luceshock",
				pt: "Luz Chocante",
				de: "Schockierendes Licht"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 3 damage counters on 1 of your opponent's Pokémon-EX.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 3 marqueurs de dégâts sur l'un des Pokémon-EX de votre adversaire.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 3 contadores de daño en 1 de los Pokémon-EX de tu rival.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere tre segnalini danno su uno dei Pokémon-EX del tuo avversario.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode colocar 3 contadores de danos em 1 dos Pokémon-EX do seu oponente.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 3 Schadensmarken auf 1 Pokémon-EX deines Gegners legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
				fr: "Gigavolt",
				es: "Gigavoltio",
				it: "Gigavolt",
				pt: "Gigavolt",
				de: "Gigavolt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 291619,
		tcgplayer: 121129
	}
}

export default card
