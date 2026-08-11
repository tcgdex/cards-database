import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [353],
	set: Set,

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Enveloping Shadow",
			'fr-fr': "Ombre Enveloppante",
			'es-es': "Sombra Envolvente",
			'it-it': "Ombra Avvolgente",
			'pt-br': "Sombra Envolvente",
			'de-de': "Einhüllender Schatten"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'it-it': "Lancia una moneta. Se esce testa, durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			'de-de': "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Jerky",

	description: {
		'en-us': "It feeds on the dark emotions of sadness and hatred, which make it grow steadily stronger.",
	},

	thirdParty: {
        cardmarket: 702383,
        tcgplayer: 487952
    }
}

export default card