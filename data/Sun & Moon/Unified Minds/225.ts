import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Mega Sableye & Tyranitar GX",
		fr: "Méga-Ténéfix et Tyranocif GX",
		es: "Mega-Sableye y Tyranitar GX",
		it: "Mega Sableye e Tyranitar GX",
		pt: "Mega Sableye e Tyranitar GX",
		de: "Mega-Zobiris & Despotar GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 280,
	types: [
		"Darkness",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Greedy Crush",
				fr: "Écrasement Avare",
				es: "Machaque Codicioso",
				it: "Distruzione Famelica",
				pt: "Esmagamento Fominha",
				de: "Gieriger Zermalmer"
			},
			effect: {
				en: "If your opponent’s Pokémon-GX or Pokémon-EX is Knocked Out by damage from this attack, take 1 more Prize card.",
				fr: "Si le Pokémon-GX ou Pokémon-EX de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
				es: "Si el Pokémon-GX o Pokémon-EX de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
				it: "Se un Pokémon-GX o un Pokémon-EX del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
				pt: "Se o Pokémon-GX ou Pokémon-EX do seu oponente for Nocauteado pelo dano deste ataque, pegue 1 carta de Prêmio a mais.",
				de: "Wenn ein Pokémon-GX oder Pokémon-EX deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr."
			},
			damage: 210,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Gigafall GX",
				fr: "Chute Giga GX",
				es: "Gigacaída GX",
				it: "Gigacrollo GX",
				pt: "Gigaqueda GX",
				de: "Gigafall GX"
			},
			effect: {
				en: "If this Pokémon has at least 5 extra Energy attached to it (in addition to this attack’s cost), discard the top 15 cards of your opponent’s deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si au moins 5 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez les 15 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si este Pokémon tiene por lo menos 5 Energías adicionales unidas a él (además de las del coste de este ataque), descarta las 15 primeras cartas de la baraja de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se questo Pokémon ha almeno cinque Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, scarta le prime 15 carte del mazzo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Se este Pokémon tiver pelo menos 5 Energias adicionais ligadas a ele (além do custo deste ataque), descarte as 15 primeiras cartas do baralho do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn an dieses Pokémon mindestens 5 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), lege die obersten 15 Karten des Decks deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 250,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Chute Giga-GX",
			},
			effect: {
				fr: "Si au moins 5 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez les 15 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 250,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
