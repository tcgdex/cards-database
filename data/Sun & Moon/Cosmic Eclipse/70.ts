import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Speed Cheer",
				fr: "Bravos Fulgurants",
				es: "Ovación Veloz",
				it: "Incitamento Rapido",
				pt: "Torcida Veloz",
				de: "Geschwindigkeitsjubel"
			},
			effect: {
				en: "The attacks of your Pokémon-GX in play that evolve from Eevee cost Colorless less. You can’t apply more than 1 Speed Cheer Ability at a time.",
				fr: "Les attaques de vos Pokémon-GX en jeu qui évoluent d’Évoli coûtent Colorless de moins. Vous ne pouvez pas utiliser plus d’un talent Bravos Fulgurants à la fois.",
				es: "Los ataques de tus Pokémon-GX en juego que evolucionen de Eevee cuestan Colorless menos. No puedes aplicar más de 1 habilidad Ovación Veloz a la vez.",
				it: "Gli attacchi dei tuoi Pokémon-GX in gioco che si evolvono da Eevee costano Colorless in meno. Può essere applicata solo un’abilità Incitamento Rapido alla volta.",
				pt: "Os ataques dos seus Pokémon-GX em jogo que evoluam de Eevee custam Colorless a menos. Você não pode usar mais de 1 Habilidade Torcida Veloz por vez.",
				de: "Die Kosten der Attacken deiner Pokémon-GX im Spiel, die sich aus Evoli entwickeln, verringern sich um Colorless. Du kannst immer nur jeweils 1 Fähigkeit Geschwindigkeitsjubel einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
				es: "Rayo de Cabeza",
				it: "Zuccalampo",
				pt: "Raio de Cabeça",
				de: "Kopf-Blitz"
			},

			damage: 70,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 407999,
		tcgplayer: 201244
	}
}

export default card
