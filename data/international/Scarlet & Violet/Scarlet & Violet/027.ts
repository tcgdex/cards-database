import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [951],
	set: Set,

	name: {
		'en-us': "Capsakid",
		'fr-fr': "Pimito",
		'es-es': "Capsakid",
		'it-it': "Capsakid",
		'pt-br': "Capsakid",
		'de-de': "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slightly Spicy",
			'fr-fr': "Légèrement Pimenté",
			'es-es': "Picantito",
			'it-it': "Piccantino",
			'pt-br': "Levemente Apimentado",
			'de-de': "Leicht gewürzt"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
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

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Traditional Paldean dishes can be extremely spicy because they include the shed front teeth of Capsakid among their ingredients.",
	},

	thirdParty: {
        cardmarket: 702323,
        tcgplayer: 487866
    }
}

export default card