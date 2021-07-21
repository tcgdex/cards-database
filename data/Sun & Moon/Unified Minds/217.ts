import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slowpoke & Psyduck-GX",
		fr: "Ramoloss et Psykokwak-GX",
		es: "Slowpoke y Psyduck-GX",
		it: "Slowpoke e Psyduck-GX",
		pt: "Slowpoke e Psyduck-GX",
		de: "Flegmon & Enton-GX"
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 250,
	types: [
		"Water",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ditch and Splash",
				fr: "Défausser et Éclabousser",
				es: "Descarte y Salpicadura",
				it: "Scarica e Sguazza",
				pt: "Dispensar e Borrifar",
				de: "Wegwerfplanscher"
			},
			effect: {
				en: "Discard any number of Supporter cards from your hand. This attack does 40 damage for each card you discarded in this way.",
				fr: "Défaussez autant de cartes Supporter que vous le voulez de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de cartas de Partidario de tu mano. Este ataque hace 40 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta un numero qualsiasi di carte Aiuto che hai in mano. Questo attacco infligge 40 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer número de cartas de Apoiador da sua mão. Este ataque causa 40 pontos de dano para cada carta descartada desta forma.",
				de: "Lege beliebig viele Unterstützerkarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 40 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Thrilling Times GX",
				fr: "Temps Heureux GX",
				es: "Momentos Emocionantes GX",
				it: "Momenti da Brivido GX",
				pt: "Tempos Emocionantes GX",
				de: "Prickelnde Zeiten GX"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 100 more damage. If this Pokémon has at least 6 extra Water Energy attached to it (in addition to this attack’s cost), flip 10 coins instead, and this attack does 100 more damage for each heads. (You can’t use more than 1 GX attack in a game.)",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 100 dégâts supplémentaires. Si au moins 6 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), lancez 10 pièces à la place, et cette attaque inflige 100 dégâts supplémentaires pour chaque côté face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más. Si este Pokémon tiene por lo menos 6 Energías Water adicionales unidas a él (además de las del coste de este ataque), lanza 10 monedas en vez de 1, y este ataque hace 100 puntos de daño más por cada cara. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più. Se questo Pokémon ha almeno sei Energie Water extra assegnate, in aggiunta a quelle del costo di questo attacco, invece lancia 10 volte una moneta e questo attacco infligge 100 danni in più ogni volta che esce testa. Non puoi usare più di un attacco GX a partita.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 100 pontos de dano a mais. Se este Pokémon tiver pelo menos 6 Energias Water adicionais ligadas a ele (além do custo deste ataque), jogue 10 moedas ao invés de 1 e este ataque causará 100 pontos de dano a mais para cada cara (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu. Wenn an dieses Pokémon mindestens 6 extra Water-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), wirf stattdessen 10 Münzen und pro Kopf fügt diese Attacke 100 Schadenspunkte mehr zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Temps Heureux-GX",
			},
			effect: {
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 100 dégâts supplémentaires. Si au moins 6 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), lancez 10 pièces à la place, et cette attaque inflige 100 dégâts supplémentaires pour chaque côté face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
