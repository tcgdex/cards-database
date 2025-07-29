import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Vileplume GX",
		fr: "Rafflesia GX",
		es: "Vileplume GX",
		it: "Vileplume GX",
		pt: "Vileplume GX",
		de: "Giflor GX"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 240,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fragrant Flower Garden",
				fr: "Jardin Fleuri Parfumé",
				es: "Jardín de Flores Aromático",
				it: "Giardino di Fiori Profumati",
				pt: "Jardim de Flores Perfumadas",
				de: "Duftender Blumengarten"
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from each of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a cada uno de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi curare ciascuno dei tuoi Pokémon da 30 danni.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano de cada um dos seus Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei jedem deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Massive Bloom",
				fr: "Floraison Massive",
				es: "Floración Masiva",
				it: "Fioritura Massiccia",
				pt: "Florescer Intenso",
				de: "Gewaltiges Blühen"
			},
			effect: {
				en: "This attack does 10 less damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "180-",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Allergic Explosion GX",
				fr: "Explosion Allergène GX",
				es: "Explosión Alérgica GX",
				it: "Esplosione Allergica GX",
				pt: "Explosão Alérgica GX",
				de: "Allergische Explosion GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned, Paralyzed, and Poisoned. (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Empoisonné et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado, Paralizado y Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene bruciato, paralizzato e avvelenato. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado, Paralisado e Queimado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt, paralysiert und vergiftet. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 407674
	}
}

export default card
