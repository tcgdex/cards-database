import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tangle Drag",
				fr: "Lasso Piège",
				es: "Arrastre Enmarañado",
				it: "Trascinavvolgi",
				pt: "Arrastar e Entrelaçar",
				de: "Wirrzieher"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sticky Web",
				fr: "Toile Gluante",
				es: "Red Viscosa",
				it: "Rete Vischiosa",
				pt: "Teia Pegajosa",
				de: "Klebenetz"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s attacks cost Colorless more, and its Retreat Cost is Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite augmente de Colorless.",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore costano Colorless in più e il suo costo di ritirata aumenta di Colorless.",
				pt: "Durante a próxima vez de jogar do seu oponente, o custo dos ataques do Pokémon Defensor será Colorless a mais e o seu custo de Recuo será Colorless a mais.",
				de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon und seine Rückzugskosten um Colorless."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
