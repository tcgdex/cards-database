import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Tsareena GX",
		fr: "Sucreine GX",
		es: "Tsareena GX",
		it: "Tsareena GX",
		pt: "Tsareena GX",
		de: "Fruyal GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		763,
	],
	hp: 230,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Side Eye",
				fr: "Regard de Travers",
				es: "Mirada Despectiva",
				it: "Sguardo Sbieco",
				pt: "Rabo de Olho",
				de: "Schiefer Blick"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jumping Side Kick",
				fr: "Coup Latéral Sauté",
				es: "Patada Salto Lateral",
				it: "Calcio Volante Laterale",
				pt: "Chute Lateral Voador",
				de: "Springender Seitentritt"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 90 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 90 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Queen’s Command GX",
				fr: "Ordre de la Reine GX",
				es: "Orden Regia GX",
				it: "Ordine della Regina GX",
				pt: "Comando da Rainha GX",
				de: "Befehl der Königin GX"
			},
			effect: {
				en: "Your opponent discards 4 cards from their hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Votre adversaire défausse 4 cartes de sa main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Tu rival descarta 4 cartas de su mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il tuo avversario scarta quattro delle carte che ha in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "O seu oponente descarta 4 cartas da própria mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dein Gegner legt 4 Karten aus seiner Hand auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
