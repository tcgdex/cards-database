import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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
				en: "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
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
		cardmarket: 368947,
		tcgplayer: 183786
	}
}

export default card
