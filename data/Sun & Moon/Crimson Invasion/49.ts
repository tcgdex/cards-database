import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Nihilego-GX",
		fr: "Zéroïd-GX",
		es: "Nihilego-GX",
		it: "Nihilego-GX",
		pt: "Nihilego-GX",
		de: "Anego-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		793,
	],
	hp: 180,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Empty Light",
				fr: "Lumière Vide",
				es: "Luz Vacua",
				it: "Lucevacua",
				pt: "Luz Vazia",
				de: "Licht der Leere"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may leave both Active Pokémon Confused and Poisoned.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez laisser les deux Pokémon Actifs Confus et Empoisonnés.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes dejar a ambos Pokémon Activos Confundidos y Envenenados.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi lasciare entrambi i Pokémon attivi confusi e avvelenati.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode deixar ambos os Pokémon Ativos Confusos e Envenenados.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du beide Aktiven Pokémon verwirren und vergiften."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Lock Up",
				fr: "Cage",
				es: "Encerrar",
				it: "Bloccare",
				pt: "Prender",
				de: "Einsperren"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Symbiont GX",
				fr: "Parasite GX",
				es: "Parásito GX",
				it: "Parasitus-GX",
				pt: "Parasita GX",
				de: "Schmarotzer GX"
			},
			effect: {
				en: "Add the top 2 cards of your opponent’s deck to their Prize cards. (You can’t use more than 1 GX attack in a game.)",
				fr: "Ajoutez les 2 cartes du dessus du deck de votre adversaire à ses cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Añade las 2 primeras cartas de la baraja de tu rival a sus cartas de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Aggiungi le prime due carte del mazzo del tuo avversario alle sue carte Premio. Non puoi usare più di un attacco GX a partita.",
				pt: "Adicione as 2 primeiras cartas do baralho do seu oponente às cartas de Prêmio dele(a) (você não pode usar mais de 1 ataque GX por partida).",
				de: "Füge die obersten 2 Karten des Decks deines Gegners seinen Preiskarten hinzu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
