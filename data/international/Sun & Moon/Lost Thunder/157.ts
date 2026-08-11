import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'es-es': "Smeargle",
		'it-it': "Smeargle",
		'pt-br': "Smeargle",
		'de-de': "Farbeagle"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stunning Likeness",
				'fr-fr': "Ressemblance Frappante",
				'es-es': "Parecido Asombroso",
				'it-it': "Somiglianza Strabiliante",
				'pt-br': "Semelhança Impressionante",
				'de-de': "Verblüffende Ähnlichkeit"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. You may use the effect of a Supporter card you find there as the effect of this attack.",
				'fr-fr': "Votre adversaire dévoile sa main. Vous pouvez utiliser l’effet d’une carte Supporter que vous y trouvez en tant qu’effet de cette attaque.",
				'es-es': "Tu rival enseña las cartas de su mano. Puedes usar el efecto de 1 carta de Partidario que encuentres entre ellas como efecto de este ataque.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Puoi usare l’effetto di una carta Aiuto presente tra esse come effetto di questo attacco.",
				'pt-br': "Seu oponente revela a própria mão. Você pode usar o efeito de 1 carta de Apoiador que encontrar lá como o efeito deste ataque.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Du kannst den Effekt 1 Unterstützerkarte, die du dort findest, als Effekt dieser Attacke einsetzen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Smash",
				'fr-fr': "Éclate-Queue",
				'es-es': "Coletazo",
				'it-it': "Coda Esplosiva",
				'pt-br': "Pancada de Cauda",
				'de-de': "Schwanzschmetterer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It draws symbols all over the place to mark its territory. In towns with many Smeargle, the walls are covered in graffiti.",
	},

	thirdParty: {
		cardmarket: 365794,
		tcgplayer: 178978
	}
}

export default card
