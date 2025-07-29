import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Bruxish",
		fr: "Denticrisse",
		es: "Bruxish",
		it: "Bruxish",
		pt: "Bruxish",
		de: "Knirfish"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		779,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Vivid Charge",
				fr: "Charge Vive",
				es: "Carga Vívida",
				it: "Carica Brillante",
				pt: "Abastecimento Vívido",
				de: "Farbaufladung"
			},
			effect: {
				en: "Search your deck for up to 3 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Psychic Fangs",
				fr: "Psycho-Croc",
				es: "Psicocolmillo",
				it: "Psicozanna",
				pt: "Caninos Psíquicos",
				de: "Psychobeißer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 90,

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
		cardmarket: 295359
	}
}

export default card
