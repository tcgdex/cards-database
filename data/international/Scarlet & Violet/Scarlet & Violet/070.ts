import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'pt-br': "Rotom",
		'de-de': "Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Junk Hunt",
			'fr-fr': "Marché aux Puces",
			'es-es': "Buscachatarra",
			'it-it': "Spulciascarti",
			'pt-br': "Caçada no Lixo",
			'de-de': "Müllsammler"
		},

		effect: {
			'en-us': "Put an Item card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Research continues on this Pokémon, which could be the power source of a unique motor.",
	},

	thirdParty: {
        cardmarket: 702366,
        tcgplayer: 487924
    }
}

export default card