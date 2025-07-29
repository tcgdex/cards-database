import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Silvally GX",
		fr: "Silvallié GX",
		es: "Silvally GX",
		it: "Silvally GX",
		pt: "Silvally GX",
		de: "Amigento GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		773,
	],

	hp: 210,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gyro Unit",
				fr: "Gyro-Unité",
				es: "Unidad Giro",
				it: "Unità Giroscopica",
				pt: "Unidade Giroscópica",
				de: "Gyro-Aggregat"
			},
			effect: {
				en: "Your Basic Pokémon in play have no Retreat Cost.",
				fr: "Vos Pokémon de base en jeu n’ont pas de Coût de Retraite.",
				es: "Tus Pokémon Básicos en juego no tienen ningún Coste de Retirada.",
				it: "I tuoi Pokémon Base in gioco non hanno costo di ritirata.",
				pt: "Seus Pokémon Básicos em jogo não têm custo de Recuo.",
				de: "Deine Basis-Pokémon im Spiel haben keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turbo Drive",
				fr: "Propulsion Turbo",
				es: "Turboimpulso",
				it: "Modulo Turbo",
				pt: "Unidade Turbo",
				de: "Turboantrieb"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rebel GX",
				fr: "Rebelle GX",
				es: "Rebelarse GX",
				it: "Ribelle-GX",
				pt: "Rebelde GX",
				de: "Rebellieren GX"
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent’s Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 50 puntos de daño por cada Pokémon en Banca de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 50 danni per ogni Pokémon nella panchina del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 50 pontos de dano para cada Pokémon no Banco do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 311937
	}
}

export default card
