import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'fr-fr': "Goupix",
		'en-us': "Vulpix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Super Roussi",
			'en-us': "Super Singe",
			'es-es': "Superquemadura",
			'it-it': "Super Scottata",
			'pt-br': "Superchamuscada",
			'de-de': "Super-Versengung"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733632,
				tcgplayer: 516060,
				cardtrader: 261157
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733632,
				tcgplayer: 516060,
				cardtrader: 261157
			}
		},
	],

	illustrator: "kawayoo",

	
}

export default card
