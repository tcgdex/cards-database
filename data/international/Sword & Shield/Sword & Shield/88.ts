import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'es-es': "Musharna",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'de-de': "Somnivora"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sleepy Pulse",
				'fr-fr': "Pouls Léthargique",
				'es-es': "Pulso Soporífero",
				'it-it': "Dormipulsar",
				'pt-br': "Pulso Dorminhoco",
				'de-de': "Schläfriger Puls"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep. During Pokémon Checkup, your opponent flips 2 coins instead of 1. If either of them is tails, that Pokémon is still Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi. Pendant le Contrôle Pokémon, votre adversaire lance 2 pièces au lieu d'une. S'il obtient au moins un côté pile, ce Pokémon-là reste Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido. Durante el Chequeo Pokémon, tu rival lanza 2 monedas en vez de 1. Si sale cruz en alguna de ellas, ese Pokémon está todavía Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato. Durante il controllo Pokémon, il tuo avversario lancia due volte una moneta invece di una. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido. Durante o Checape Pokémon, seu oponente joga 2 moedas ao invés de 1. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt. Beim Pokémon-Check wirft dein Gegner 2 Münzen anstelle von 1. Wenn eine oder beide Münzen Zahl zeigen, schläft jenes Pokémon weiter."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Super Hypnoblast",
				'fr-fr': "Super Hypno-Rafale",
				'es-es': "Superhipnorrayo",
				'it-it': "Super Ipnobomba",
				'pt-br': "Superborrifada Hipnótica",
				'de-de': "Super Hypnoschuss"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Asleep, this attack does 120 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 120 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 120 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Adormecido, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners schläft, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It drowses and dreams all the time. It's best to leave it be if it's just woken up, as it's a terrible grump when freshly roused from sleep."
	},

	dexId: [518],

	thirdParty: {
		cardmarket: 436564,
		tcgplayer: 208397
	}
}

export default card
