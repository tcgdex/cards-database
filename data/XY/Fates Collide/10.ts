import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Fennekin",
		fr: "Feunnec",
		es: "Fennekin",
		it: "Fennekin",
		pt: "Fennekin",
		de: "Fynx"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		653,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
				es: "Llama abrasadora",
				it: "Fulminshock",
				pt: "Fogo-fátuo",
				de: "Irrlicht"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whip",
				fr: "Mimi-Queue",
				es: "Látigo",
				it: "Colpocoda",
				pt: "Cauda Chicote",
				de: "Rutenschlag"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289836
	}
}

export default card
