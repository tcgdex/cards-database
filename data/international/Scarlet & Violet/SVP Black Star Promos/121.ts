import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		'en-us': "Revavroom",
		'fr-fr': "Vrombotor",
		'es-es': "Revavroom",
		'it-it': "Revavroom",
		'pt-br': "Revavroom",
		'de-de': "Knattatox"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Swagger",
			'fr-fr': "Vantardise",
			'es-es': "Contoneo",
			'it-it': "Bullo",
			'pt-br': "Arrogância",
			'de-de': "Angeberei"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Huge Tackle",
			'fr-fr': "Charge Gigantesque",
			'es-es': "Placaje Gigante",
			'it-it': "Macroazione",
			'pt-br': "Investidona",
			'de-de': "Riesiger Tackle"
		},

		effect: {
			'en-us': "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
			'fr-fr': "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver mais cartas na mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du mehr Karten auf deiner Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Nisota Niso",
	description: {
		'en-us': "It creates a gas out of poison and minerals from rocks. It then detonates the gas in its cylinders— now numbering eight—to generate energy.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 769421,
				tcgplayer: 560618
			},
		}
	],
}

export default card
