import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		es: "Smeargle",
		it: "Smeargle",
		pt: "Smeargle",
		de: "Farbeagle"
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
				en: "Stunning Likeness",
				fr: "Ressemblance Frappante",
				es: "Parecido Asombroso",
				it: "Somiglianza Strabiliante",
				pt: "Semelhança Impressionante",
				de: "Verblüffende Ähnlichkeit"
			},
			effect: {
				en: "Your opponent reveals their hand. You may use the effect of a Supporter card you find there as the effect of this attack.",
				fr: "Votre adversaire dévoile sa main. Vous pouvez utiliser l’effet d’une carte Supporter que vous y trouvez en tant qu’effet de cette attaque.",
				es: "Tu rival enseña las cartas de su mano. Puedes usar el efecto de 1 carta de Partidario que encuentres entre ellas como efecto de este ataque.",
				it: "Il tuo avversario mostra le carte che ha in mano. Puoi usare l’effetto di una carta Aiuto presente tra esse come effetto di questo attacco.",
				pt: "Seu oponente revela a própria mão. Você pode usar o efeito de 1 carta de Apoiador que encontrar lá como o efeito deste ataque.",
				de: "Dein Gegner zeigt dir seine Handkarten. Du kannst den Effekt 1 Unterstützerkarte, die du dort findest, als Effekt dieser Attacke einsetzen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-Queue",
				es: "Coletazo",
				it: "Coda Esplosiva",
				pt: "Pancada de Cauda",
				de: "Schwanzschmetterer"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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



}

export default card
