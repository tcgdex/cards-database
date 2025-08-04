import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Gastrodon",
		fr: "Tritosor",
		es: "Gastrodon",
		it: "Gastrodon",
		pt: "Gastrodon",
		de: "Gastrodon"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Shellos",
		fr: "Sancoki",
		es: "Shellos",
		it: "Shellos",
		pt: "Shellos",
		de: "Schalellos"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sticky Shot",
				fr: "Coup Gluant",
				es: "Disparo Pegajoso",
				it: "Viscocolpo",
				pt: "Tiro Grudento",
				de: "Klebriger Schuss"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus, et son Coût de Retraite est augmenté de Colorless.",
				es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan Colorless más, y su Coste de Retirada es de Colorless más.",
				it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore costano Colorless in più e il suo costo di ritirata aumenta di Colorless.",
				pt: "Durante a próxima vez de jogar do seu oponente, o custo dos ataques do Pokémon Defensor será Colorless maior e o seu Custo para Recuar será Colorless maior.",
				de: "Während des nächsten Zuges deines Gegners erhöhen sich die Angriffskosten und die Rückzugskosten des Verteidigenden Pokémon um Colorless."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				es: "Hidropulso",
				it: "Idropulsar",
				pt: "Pulso d'Água",
				de: "Aquawelle"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 291565,
		tcgplayer: 121016
	}
}

export default card
